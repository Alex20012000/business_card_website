const {
  updaiteText,
  chengeSlide,
  updaiteLinks,
  updaitedots,
} = require('./index');

// Mocking DOM elements and functions
document.querySelectorAll = jest.fn(() => [
  { innerHTML: '' },
  { innerHTML: '' },
  { innerHTML: '' },
  { innerHTML: '' },
]);


document.querySelector = jest.fn(() => ({
  style: { backgroundImage: '' },
}));

const arrowRightMock = { addEventListener: jest.fn() };
const arrowLeftMock = { addEventListener: jest.fn() };
const dotsMock = [{ addEventListener: jest.fn() }];
const linksMock = [{ addEventListener: jest.fn() }];

document.querySelector.mockReturnValueOnce(arrowRightMock).mockReturnValueOnce(arrowLeftMock);
document.querySelectorAll.mockReturnValueOnce(dotsMock).mockReturnValueOnce(linksMock);

describe('updaiteText', () => {
  it('should update text content correctly', () => {
    const slides = [
      {
        Должности: 'Test Position 1',
        ВремяРаботы: '1 year',
        Обязанности: 'Test Responsibilities 1',
        repairConst: 'Test Repair 1',
      },
    ];

    updaiteText(0);

    expect(document.querySelectorAll).toHaveBeenCalledWith('.projects-info-text');
    expect(document.querySelectorAll).toHaveBeenCalledTimes(1);

    expect(document.querySelectorAll().length).toBe(4);

    expect(document.querySelectorAll()[0].innerHTML).toBe(slides[0].Должности);
    expect(document.querySelectorAll()[1].innerHTML).toBe(slides[0].ВремяРаботы);
    expect(document.querySelectorAll()[2].innerHTML).toBe(slides[0].Обязанности);
    expect(document.querySelectorAll()[3].innerHTML).toBe(slides[0].repairConst);
  });
});