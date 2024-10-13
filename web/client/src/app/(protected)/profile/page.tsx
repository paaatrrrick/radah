'use client';
import React, { useState } from 'react';
import constants from '@/helpers/constants';
import { fireBaseAuth } from '@/helpers/firebase';
import { Button } from '@/components/Button';
import { useError } from '@/context/ErrorContext';
import { useLoader } from '@/context/LoaderContext';

export default function Profile() {
    const [response, setResponse] = useState('')
    const { setError } = useError();
    const { setLoading } = useLoader();
    const getUser = async () => {
        setLoading({text: 'Loaders are easy to use!'});
        await new Promise(r => setTimeout(r, 2000));
        const token = await fireBaseAuth.currentUser?.getIdToken();
        const response = await fetch(`${constants.serverUrl}/profile/get`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        });
        const data = await response.json();
        setLoading(false);
        if (!response.ok) {
            setError({primaryMessage: 'Error getting user information', secondaryMessage: 'Please try again later'});
            return;
        }
        setResponse(JSON.stringify(data));
    }
    return (
        <div className='ml-4 flex flex-col'>
            <div className='flex gap-4'>
            <Button onClick={() => getUser()} variant='outline' className='mt-4 w-52'>Get User</Button>
            <Button onClick={() => setError({primaryMessage: "Error messages are easy to add", timeout: 2500})} variant='solid' color='slate' className='mt-4 w-52'>Show Error Alert</Button>
            <Button onClick={() => setError({primaryMessage: "Warning messages are easy to add", type: 'warning', timeout: 2500})} className='mt-4 w-52'  variant='outline' color='slate'>Show Warning Alert</Button>
            <Button onClick={() => setError({primaryMessage: "There can be primary text", secondaryMessage: "There can also be secondary text", timeout: 5000, type: 'success'})} className='mt-4 w-52'>Show Success Alert</Button>
            </div>
            {response && 
            <>
                <h4 className='mt-8 text-lg font-bold'>Here is the information on your profile: it is simple to map a user from the frontend to backend</h4>
                <p className='italic'>{response}</p>
            </>
            }
        </div>
    )
}
