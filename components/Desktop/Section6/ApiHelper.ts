import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

interface SendOptions {
    name: string;
    phone: string;
    email: string;
    content: string;
}

interface ApiResult {
    success: boolean;
    message: string;
}

export class ApiHelper {
    public async send(options: SendOptions): Promise<ApiResult> {
        const failMessage = '데이터를 전송할 수 없습니다. 잠시후 다시 시도하세요.';
        const result: ApiResult = {
            success: false,
            message: '',
        };
        try {
            const toEmail = publicRuntimeConfig.emailTo;
            const baseUrl = publicRuntimeConfig.apiBaseUrl;

            if (!toEmail) {
                throw new Error('받는 사람 전자우편주소가 설정되지 않았습니다.');
            }

            if (!baseUrl) {
                throw new Error('API 기본 주소가 설정되지 않았습니다.');
            }

            axios.defaults.baseURL = baseUrl;

            const response = await axios.post('/api/email', {
                from: options.email,
                to: toEmail,
                title: `[입점신청] ${options.name} ${options.phone}`,
                body: options.content,
                useHtml: false,
                origin: 'omo-landing',
            });

            const { success, message, payload } = response.data;
            console.info(response.data);
            if (success) {
                const { item } = payload;
                result.success = (item as boolean) || false;
            } else {
                result.success = false;
                result.message = message || failMessage;
            }
        } catch (error) {
            console.error(error);
            result.success = false;
            result.message = failMessage;
        }
        return result;
    }
}
