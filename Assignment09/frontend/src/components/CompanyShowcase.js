import React, { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

const CompanyShowcase = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get('/images');
            setCompanies(response.data);
        };
        fetchImages();
    }, []);

    return (
        <div>
            <h2>Company Showcase</h2>
            {companies.map((company, index) => (
                <div key={index}>
                    <img src={`http://localhost:3000/${company.imagePath}`} alt={company.name} />
                    <p>{company.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CompanyShowcase;
