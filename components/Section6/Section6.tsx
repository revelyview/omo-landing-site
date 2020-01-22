import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import { ApiHelper } from './ApiHelper';
import './styles.css';

const constraints = {
    name: {
        presence: {
            allowEmpty: false,
            message: '^이름을 입력하세요',
        },
    },
    phone: {
        presence: {
            allowEmpty: false,
            message: '^전화번호를 입력하세요',
        },
        format: {
            pattern: /[0-9\-]+/,
            flags: 'i',
            message: '^숫자로 입력하세요',
        },
    },
    email: {
        presence: {
            allowEmpty: false,
            message: '^이메일을 입력하세요',
        },
        email: {
            message: '^이메일 주소 형식으로 입력하세요.',
        },
    },
    content: {
        presence: {
            allowEmpty: false,
            message: '^문의 내용을 입력하세요',
        },
    },
};

interface FormValues {
    name: string;
    phone: string;
    email: string;
    content: string;
}

type FormValuesKeys = keyof FormValues;

type FormTouched = {
    [key in FormValuesKeys]: boolean;
};

type FormErrors = {
    [key in FormValuesKeys]: string[];
};

interface FormState {
    isValid: boolean;
    values: FormValues;
    touched: FormTouched;
    errors: FormErrors;
}

const getInitialState = (): FormState => {
    return {
        isValid: false,
        values: {
            name: '',
            phone: '',
            email: '',
            content: '',
        },
        touched: {
            name: false,
            phone: false,
            email: false,
            content: false,
        },
        errors: {
            name: [],
            phone: [],
            email: [],
            content: [],
        },
    };
};

export const Section6 = () => {
    const [formState, setFormState] = useState<FormState>(getInitialState());
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const hasError = (field: FormValuesKeys) => {
        return formState.touched[field] && formState.errors[field] ? true : false;
    };

    useEffect(() => {
        const errors = validate(formState.values, constraints);
        setFormState(prev => ({
            ...prev,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }, [formState.values]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();

        setFormState(prevState => ({
            ...prevState,
            values: {
                ...prevState.values,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
            },
            touched: {
                ...prevState.touched,
                [event.target.name]: true,
            },
        }));
    };

    const handleTextareaChangge = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.persist();

        setFormState(prevState => ({
            ...prevState,
            values: {
                ...prevState.values,
                [event.target.name]: event.target.value,
            },
            touched: {
                ...prevState.touched,
                [event.target.name]: true,
            },
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // const errors = validate(formState.values, constraints);
        // setFormState(prev => ({
        //     ...prev,
        //     isValid: errors ? false : true,
        //     errors: errors || {},
        // }));

        if (formState.isValid) {
            const api = new ApiHelper();
            setLoading(true);
            setMessage('');
            api.send({
                ...formState.values,
            })
                .then(result => {
                    const { success, message } = result;

                    if (success) {
                    } else {
                        setMessage(message);
                    }
                })
                .catch(error => {
                    setMessage(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <div id="section6-container">
            <a id="section6"></a>
            <div className="title">입점신청</div>

            <form onSubmit={handleSubmit} autoComplete="off" autoCorrect="off" id="section6-form-container">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="input-name">이름</label>
                            <input
                                id="input-name"
                                type="text"
                                placeholder="홍길동"
                                name="name"
                                maxLength={20}
                                value={formState.values['name']}
                                onChange={handleInputChange}
                            />
                            <div className="error">{hasError('name') ? formState.errors['name'][0] : ' '}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="input-phone">연락처</label>
                            <input
                                id="input-phone"
                                type="phone"
                                placeholder="01000000000"
                                name="phone"
                                maxLength={13}
                                value={formState.values['phone']}
                                onChange={handleInputChange}
                            />
                            <div className="error">{hasError('phone') ? formState.errors['phone'][0] : ' '}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="input-email">이메일</label>
                            <input
                                id="input-email"
                                type="email"
                                placeholder="omo@gmail.com"
                                name="email"
                                maxLength={50}
                                value={formState.values['email']}
                                onChange={handleInputChange}
                            />
                            <div className="error">{hasError('email') ? formState.errors['email'][0] : ' '}</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group full-height">
                            <label htmlFor="input-content">문의 내용</label>
                            <textarea
                                id="input-content"
                                name="content"
                                maxLength={3000}
                                value={formState.values['content']}
                                onChange={handleTextareaChangge}
                                placeholder="입점 및 궁금하신 점을 자유롭게 적어주세요 :)"
                            ></textarea>
                            <div className="error">{hasError('content') ? formState.errors['content'][0] : ' '}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <div className="message">
                                <div className="error">{message ? message : ''}</div>
                            </div>
                            <button type="submit" disabled={loading || !formState.isValid}>
                                입점 신청하기
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
