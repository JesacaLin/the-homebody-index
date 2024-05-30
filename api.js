

export async function fetchHoroscope(sign) {
    try {
        const response = await fetch(`http://localhost:3000/horoscope/${sign}`);
        if (!response.ok) {
            throw new Error('HTTP error! status: ${response.status}')
        }
        const data = await response.json();
        return data.data.horoscope_data;
    } catch (error) {
        console.error('Error:', error);
        return error.message;
    }
    
    
    
}



