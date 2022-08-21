// task kyu 7 "Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe"

/*You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
Your task is to return the number of JavaScript developers coming from Europe.
For example, given the following list:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];*/
/*Вам будет предоставлен массив объектов (хэшей в ruby), представляющих данные о разработчиках, которые подписались на участие в встрече программистов, которую вы организуете впервые.
Ваша задача — вернуть количество разработчиков JavaScript из Европы .
Например, учитывая следующий список:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];*/

const list1 = [
    {
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'JavaScript'
    },
    {
        firstName: 'Maia',
        lastName: 'S.',
        country: 'Tahiti',
        continent: 'Oceania',
        age: 28,
        language: 'JavaScript'
    },
    {
        firstName: 'Shufen',
        lastName: 'L.',
        country: 'Taiwan',
        continent: 'Europe',
        age: 35,
        language: 'JavaScript'
    },
    {
        firstName: 'Sumayah',
        lastName: 'M.',
        country: 'Tajikistan',
        continent: 'Asia',
        age: 30,
        language: 'CSS'
    }
];

function countDevelopers(list) {
   return  list.filter(el => el.continent === 'Europe' && el.language === 'JavaScript').length
}

console.log(countDevelopers(list1))

