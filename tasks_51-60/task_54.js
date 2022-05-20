"use strict";
// task kyu 7 "Categorize New Member"
/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
*/

/*
Крокетный клуб Western Suburbs имеет две категории членства: Senior и Open. Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано, в какую категорию они будут помещены.
Чтобы быть пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7. В этом крокетном клубе гандикап варьируется от -2 до +26; чем лучше игрок, тем ниже гандикап.
*/


function openOrSenior(data) {
    return data.map(i => (i[0] > 54 && i[1] > 7) ? 'Senior' : 'Open');
}