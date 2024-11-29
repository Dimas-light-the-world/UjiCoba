import React, { useState, useEffect } from "react";

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date()); // Perbarui waktu setiap detik
        }, 1000);

        return () => clearInterval(timer); // Membersihkan interval saat komponen dilepas
    }, []);

    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © 2024 Portofolio Saya. Dibuat dengan sengaja oleh Arya Wibawa Atmanegara ft.AI.
                </p>
                <p className="text-sm">
                    Waktu sekarang: {currentTime.toLocaleTimeString()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;