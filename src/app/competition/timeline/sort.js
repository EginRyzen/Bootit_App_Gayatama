export const getSortedCompetitionData = (data) => {
    const now = new Date();

    // Jika data tidak ada (undefined/null), kembalikan array kosong untuk menghindari error
    if (!data) {
        return [];
    }

    // Filter data untuk hanya menyertakan item dengan endTime di masa depan
    const futureCompetition = data.filter(item => new Date(item.endTime) > now);

    // Urutkan data berdasarkan endTime
    return futureCompetition.sort((a, b) => new Date(a.endTime) - new Date(b.endTime));
}
