import React, { useState } from 'react'

const useLoader = () => {
    const [loading, setLoading] = useState(false);
    return [loading, setLoading]
}

export default useLoader
