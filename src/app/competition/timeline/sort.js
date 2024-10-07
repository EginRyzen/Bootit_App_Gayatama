export const getSortedMeetupData = (data) => {
    const now = new Date();

    // Filter data untuk hanya menyertakan item dengan endTime di masa depan
    const futureMeetups = data.filter(item => new Date(item.endTime) > now);

    // Urutkan data berdasarkan endTime
    return futureMeetups.sort((a, b) => new Date(a.endTime) - new Date(b.endTime));
}
