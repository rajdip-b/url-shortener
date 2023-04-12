import React from 'react';
import {
    ContentCopyRounded,
    KeyboardArrowLeftRounded,
    KeyboardArrowRightRounded,
    SearchRounded,
} from '@mui/icons-material';
import { toast } from 'react-toastify';

export type AddressBarProps = {
    value: string;
    onChange?: (text: string) => void;
    outputMode?: boolean;
    generatedUrl?: string;
}

const AddressBar: React.FC<AddressBarProps> = (props) => {
    const copyToClipboard = React.useCallback(() => {
        if (props.generatedUrl === '')
            return;

        navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.generatedUrl}`);
        toast.success('Copied to clipboard!');
    }, [props.generatedUrl]);

    return (
        <div className={'flex gap-10 items-center justify-between px-10 bg-gray/20 py-3 rounded-2xl w-full'}>
            <div className={'flex gap-3'}>
                <div className={'w-[25px] h-[25px] rounded-full bg-red-500'} />
                <div className={'w-[25px] h-[25px] rounded-full bg-amber-500'} />
                <div className={'w-[25px] h-[25px] rounded-full bg-green-500'} />
            </div>
            <div className={'flex gap-3 bg-white/40 rounded-xl px-4 py-2 w-[70%] drop-shadow-xl'}>
                <SearchRounded fontSize={'medium'} />
                <input
                    value={props.outputMode ? props.generatedUrl ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${props.generatedUrl}` : 'Hit generate to get started!' : props.value}
                    onChange={e => props.onChange && props.onChange(e.target.value)}
                    disabled={props.outputMode}
                    type={'text'}
                    className={'outline-none bg-transparent text-deepBlue/70 w-full h-full'}
                    placeholder={'https://www.google.com'}
                />
            </div>
            <div className={'flex gap-3'}>
                {props.outputMode &&
                    <button onClick={copyToClipboard}>
                        <ContentCopyRounded />
                    </button>
                }
                <KeyboardArrowLeftRounded fontSize={'large'} />
                <KeyboardArrowRightRounded fontSize={'large'} />
            </div>
        </div>
    );
};

export default AddressBar;