const shareCompetition = async (item) => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: item.title,
                text: item.description,
                url: item.link,
            });
            console.log('Competition shared successfully!');
        } catch (error) {
            console.error('Error sharing competition:', error);
        }
    } else {
        console.log('Web Share API is not supported in this browser.');
        alert('Sharing is not supported on this device/browser.');
    }
};

export default shareCompetition;
