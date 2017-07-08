$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bdd/groups.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 3,
  "name": "Карточки в трекере",
  "description": "",
  "id": "карточки-в-трекере",
  "keyword": "Функционал"
});
formatter.scenarioOutline({
  "line": 5,
  "name": ": Создание карты в трекере",
  "description": "",
  "id": "карточки-в-трекере;:-создание-карты-в-трекере",
  "type": "scenario_outline",
  "keyword": "Структура сценария"
});
formatter.step({
  "line": 6,
  "name": "нажать на список проектов",
  "keyword": "Если "
});
formatter.step({
  "line": 7,
  "name": "нажать на название проекта",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "нажать на Баг Трекер",
  "keyword": "И "
});
formatter.step({
  "line": 9,
  "name": "создать карточку с названием \u003ccardName\u003e и описанием \u003ccardDescription\u003e",
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "на странице видна карточка с названием \u003ccardName\u003e",
  "keyword": "То "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "карточки-в-трекере;:-создание-карты-в-трекере;",
  "rows": [
    {
      "cells": [
        "cardName",
        "cardDescription"
      ],
      "line": 13,
      "id": "карточки-в-трекере;:-создание-карты-в-трекере;;1"
    },
    {
      "cells": [
        "название карточки 1",
        "описание карточки 1"
      ],
      "line": 14,
      "id": "карточки-в-трекере;:-создание-карты-в-трекере;;2"
    }
  ],
  "keyword": "Примеры"
});
formatter.before({
  "duration": 7953295580,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": ": Создание карты в трекере",
  "description": "",
  "id": "карточки-в-трекере;:-создание-карты-в-трекере;;2",
  "type": "scenario",
  "keyword": "Структура сценария"
});
formatter.step({
  "line": 6,
  "name": "нажать на список проектов",
  "keyword": "Если "
});
formatter.step({
  "line": 7,
  "name": "нажать на название проекта",
  "keyword": "И "
});
formatter.step({
  "line": 8,
  "name": "нажать на Баг Трекер",
  "keyword": "И "
});
formatter.step({
  "line": 9,
  "name": "создать карточку с названием название карточки 1 и описанием описание карточки 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "на странице видна карточка с названием название карточки 1",
  "matchedColumns": [
    0
  ],
  "keyword": "То "
});
formatter.match({
  "location": "CardStepsDefinition.gotoProjectList()"
});
formatter.result({
  "duration": 2338833792,
  "status": "passed"
});
formatter.match({
  "location": "CardStepsDefinition.selectProject()"
});
formatter.result({
  "duration": 455896290,
  "status": "passed"
});
formatter.match({
  "location": "CardStepsDefinition.gotoBugTracker()"
});
formatter.result({
  "duration": 735510024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "название карточки 1",
      "offset": 29
    },
    {
      "val": "описание карточки 1",
      "offset": 61
    }
  ],
  "location": "CardStepsDefinition.createCardOnTracker(String,String)"
});
formatter.result({
  "duration": 2427851666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "название карточки 1",
      "offset": 39
    }
  ],
  "location": "CardStepsDefinition.verifyCardCreated(String)"
});
formatter.result({
  "duration": 77324093,
  "status": "passed"
});
formatter.after({
  "duration": 814402183,
  "status": "passed"
});
});