export const getSortedCompetitionData = (data) => {
    const now = new Date();

    // Filter data untuk hanya menyertakan item dengan endTime di masa depan
    const futureCompetition = data.filter(item => new Date(item.endTime) > now);

    // Urutkan data berdasarkan endTime
    return futureCompetition.sort((a, b) => new Date(a.endTime) - new Date(b.endTime));
}
