import * as React from 'react';
import Link from 'next/link';
import { Spacer, Spinner, Window } from '@1milligram/design';
import { Frame } from '@1milligram/frame';

import { classNames } from '../utils/classNames';
import { CodeIcon } from './icons/CodeIcon';
import { LinkIcon } from './icons/LinkIcon';
import Code from './markdown/Code';

export const Demo: React.FC<{
    title?: string;
    url: string;
}> = ({ title = '', url }) => {
    const sampleCodeUrl = url.replace('/demo/', 'https://github.com/1milligram/html-dom/blob/master/public/demo/');
    const [sampleCode, setSampleCode] = React.useState('');
    const [codeOpened, setCodeOpened] = React.useState(false);

    const loadSampleCode = () => {
        setCodeOpened(!codeOpened);
        if (!sampleCode) {
            fetch(url)
                .then((response) => response.text())
                .then((text) => setSampleCode(text));
        }
    };

    return (
        <>
            <Spacer size="small" />
            <Window title={title}>
                <div className="demo">
                    <div className="demo__frame">
                        <Frame url={url} />
                    </div>
                    <div className="demo__toolbar">
                        <button className="demo__button" type="button" onClick={loadSampleCode}>
                            <CodeIcon />
                        </button>
                        <Link href={sampleCodeUrl}>
                            <a className="demo__button" target="blank" rel="noopener noreferrer">
                                <LinkIcon />
                            </a>
                        </Link>
                    </div>
                    <div
                        className={classNames({
                            demo__code: true,
                            'demo__code--opened': codeOpened,
                        })}
                    >
                        {!sampleCode && (
                            <div className="demo__code-loader">
                                <Spinner />
                            </div>
                        )}
                        {sampleCode && (
                            <div className="demo__code-body">
                                <Code className="lang-html">{sampleCode}</Code>
                            </div>
                        )}
                    </div>
                </div>
            </Window>
            <Spacer size="small" />
        </>
    );
};
