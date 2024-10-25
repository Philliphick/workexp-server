// get all plants (first page of 30)
exports.getAll = async (req, res) => {
    try {
        const response = await fetch(`https://trefle.io/api/v1/plants?token=eET3I-nq1o3bCu8fdzATcnd1qvxR2F6SQQEg29Bftpw`);

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Error ${response.status}: ${response.statusText}`, errorBody);
            return res.status(response.status).json({ error: 'API request failed', details: errorBody });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Caught error:', error);
        res.status(500).json({ error: 'Sorry, no plants found', details: error.message });
    }
};

// fetch plants by common-name
exports.getByName = async (req, res, next) => {
    const { name } = req.params;
    console.log(name)
    try {
        const response = await fetch(`https://trefle.io/api/v1/plants?token=eET3I-nq1o3bCu8fdzATcnd1qvxR2F6SQQEg29Bftpw&filter[common_name]=${name}`);
        if (!response.ok) {
            // Log the actual response body if the request fails
            const errorBody = await response.text();
            console.error('Error response:', errorBody);
            return res.status(response.status).json({ error: 'API request failed', details: errorBody });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Caught error:', error);
        res.status(500).json({ error: 'Sorry, no plants found', details: error.message });
    }
}