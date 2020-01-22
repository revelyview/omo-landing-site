import React, { useState } from 'react';
import './styles.css';

export const Section6 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                            <input id="input-name" type="text" placeholder="홍길동" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="input-phone">연락처</label>
                            <input id="input-phone" type="phone" placeholder="01000000000" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="input-email">이메일</label>
                            <input id="input-email" type="email" placeholder="omo@gmail.com" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group full-height">
                            <label htmlFor="input-content">문의 내용</label>
                            <textarea id="input-content"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <button type="submit">입점 신청하기</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
