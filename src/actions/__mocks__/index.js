module.exports = {
    ...jest.requireActual('..'),
    __exModule: true,
    // TODO: update return value for Redux/context implementation
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party'))
}