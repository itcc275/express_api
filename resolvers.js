export const resolvers = {
    Query: {
        authors: () => {
            return [
                { id: '1', name: 'Author One' },
                { id: '2', name: 'Author Two' }
            ];
        },

        books: () => {
            return [
                { id: '1', title: 'Book One', publishedYear: 2021 },
                { id: '2', title: 'Book Two', publishedYear: 2022 }
            ];
        }
    }
}