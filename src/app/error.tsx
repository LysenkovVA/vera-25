'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Что-то пошло не так!</h2>
            <h3>{error.message}</h3>
            <h3>{`Digest: ${error.digest}`}</h3>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Попробовать снова
            </button>
        </div>
    )
}