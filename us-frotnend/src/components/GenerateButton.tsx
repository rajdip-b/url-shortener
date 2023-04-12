import React from 'react';
import { CachedRounded } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-toastify';

export type GenerateButtonProps = {
    setGenerateUrl: (url: string) => void;
    longUrl: string;
}

const GenerateButton: React.FC<GenerateButtonProps> = props => {
    const [loading, setLoading] = React.useState(false);

    const generateUrl = React.useCallback(() => {
        if (props.longUrl === '') {
            toast.error('Please enter a valid URL!');
            return;
        }
        setLoading(true);
        axios({
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/generate-short-url?longUrl=${props.longUrl}`,
        })
            .then(data => {
                props.setGenerateUrl(data.data);
                toast.success('Your URL got shortened!');
            })
            .catch(() => toast.error('Uh-oh! Something went wrong!'))
            .finally(() => setLoading(false));
    }, [props]);

    return (
        <button disabled={loading} onClick={generateUrl}
                className={`flex gap-4 rounded-lg border-4 px-5 py-3 w-[300px] items-center justify-center mx-auto transition-all ease-out duration-300 ${loading ? 'bg-transparent text-green-500 border-green-500' : 'border-teal text-white hover:bg-transparent hover:text-teal bg-teal'}`}>
            <div className={`${loading && 'animate-spin'}`}>
                <CachedRounded />
            </div>
            <span className={'text-xl'}>
                {loading ? 'Generating...' : 'Generate'}
            </span>
        </button>
    );
};

export default GenerateButton;