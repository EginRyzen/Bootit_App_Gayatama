const generateQRCode = async (link) => {
    try {
        // Mengembalikan URL API langsung tanpa menggunakan Blob
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(link)}&size=200x200`;
        return qrCodeUrl;
    } catch (error) {
        console.error('Error generating QR Code:', error);
        return null;
    }
};

export default generateQRCode;