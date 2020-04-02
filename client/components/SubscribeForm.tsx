import React from 'react';

const SubscribeForm: React.FC<{}> = () => {
    return (
        <div className='text-center mb-8'>
            <div className='mb-4'>
                点击订阅按钮获取我的工具的最新消息。如果没有收到，请查看垃圾邮件
            </div>
            <form
                action="https://csslayout.us4.list-manage.com/subscribe/post?u=77d0bf6497a2cdbb36f08587c&amp;id=e8a912009a"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate={true}
            >
                <input
                    className='border border-gray-400 p-2 w-56 sm:w-64'
                    type="email"
                    name="EMAIL"
                    placeholder="邮箱地址"
                    required={true}
                />
                <div style={{ left: '-5000px', position: 'absolute' }} aria-hidden="true">
                    <input type="text" name="b_77d0bf6497a2cdbb36f08587c_e8a912009a" tabIndex={-1} />
                </div>
                <button
                    type="submit"
                    name="subscribe"
                    className='bg-blue-600 border border-blue-600 px-4 py-2 text-white'
                >
                    订阅
                </button>
            </form>
        </div>
    );
};

export default SubscribeForm;
