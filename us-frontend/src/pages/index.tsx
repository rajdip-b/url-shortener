import { Inter } from 'next/font/google';
import AddressBar from '../components/AddressBar';
import React from 'react';
import GenerateButton from '../components/GenerateButton';
import Image from 'next/image';
import side from '../asset/side.svg';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
    const [generatedUrl, setGeneratedUrl] = React.useState('');
    const [longUrl, setLongUrl] = React.useState('');

    return <div
        className={'w-screen min-h-screen flex flex-row h-screen items-center justify-between' + inter.className}>
        <div className={'gap-y-10 flex flex-col md:p-10 lg:p-20 p-5 flex-grow'}>
            <div className={'flex flex-col gap-y-5'}>
                <div className={'text-3xl md:text-4xl text-brightRed font-semibold'}>urls</div>
                <div className={'text-4xl md:text-6xl text-deepBlue font-medium'}>when</div>
                <div className={'text-4xl md:text-6xl text-deepBlue font-medium'}>shorter</div>
            </div>
            <AddressBar value={longUrl} onChange={setLongUrl} />
            <GenerateButton setGenerateUrl={setGeneratedUrl} longUrl={longUrl} />
            <AddressBar generatedUrl={generatedUrl} outputMode={true} value={''} />
            <div className={'text-4xl md:text-6xl text-deepBlue font-medium'}>are better.</div>
        </div>
        <Image className={'h-screen lg:block hidden'} src={side} alt={''} draggable={false} />
    </div>;
}
