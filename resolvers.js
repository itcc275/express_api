const data = {
    authors: [
        { id: '1', name: 'Author One', bookIds: ['1', '2'] },
        { id: '2', name: 'Author Two', bookIds: ['3', '4'] },
        { id: '3', name: 'Author Three', bookIds: ['5', '6'] },
        { id: '4', name: 'Author Four', bookIds: ['7'] }
    ],
    books: [
        { id: '1', title: 'Book One', publishedYear: 2021, authorId: "1" },
        { id: '2', title: 'Book Two', publishedYear: 2022, authorId: "1" },
        { id: '3', title: 'Book Three', publishedYear: 2023, authorId: "2" },
        { id: '4', title: 'Book Four', publishedYear: 2024, authorId: "2" },
        { id: '5', title: 'Book Five', publishedYear: 2020, authorId: "3" },
        { id: '6', title: 'Book Six', publishedYear: 2019, authorId: "3" },
        { id: '7', title: 'Book Seven', publishedYear: 2021, authorId: "4" }
    ]
}
export const resolvers = {

    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id));
        }
    },
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find(author => author.id === parent.authorId);
        }
    },
    Query: {
        authors: () => {
            return data.authors;
        },

        books: () => {
            return data.books;
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            return data.books.push({
                id: String(data.books.length + 1), // Simple ID generation
                title: args.title,
                publishedYear: args.publishedYear,
                authorId: args.authorId
            })
        }
    }
}