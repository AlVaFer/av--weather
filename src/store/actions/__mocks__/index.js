module.exports = {
  ...jest.requireActual(".."),
  __esModule: true,
  getAllCities: jest.fn().mockReturnValue({ type: "mock" }),
  deleteCity: jest.fn().mockReturnValue({ type: "mock" }),
  requestCityByName: jest.fn().mockReturnValue({ type: "mock" }),
  setCurrentIndex: jest.fn().mockReturnValue({ type: "mock" }),
};
