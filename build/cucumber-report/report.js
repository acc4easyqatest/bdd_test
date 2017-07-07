$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bdd/groups.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: ru"
    }
  ],
  "line": 3,
  "name": "Карточки в трекерt",
  "description": "",
  "id": "карточки-в-трекерt",
  "keyword": "Функционал"
});
formatter.scenarioOutline({
  "line": 5,
  "name": ": Создание карты в трекере",
  "description": "",
  "id": "карточки-в-трекерt;:-создание-карты-в-трекере",
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
  "id": "карточки-в-трекерt;:-создание-карты-в-трекере;",
  "rows": [
    {
      "cells": [
        "cardName",
        "cardDescription"
      ],
      "line": 13,
      "id": "карточки-в-трекерt;:-создание-карты-в-трекере;;1"
    },
    {
      "cells": [
        "название карточки 1",
        "описание карточки 1"
      ],
      "line": 14,
      "id": "карточки-в-трекерt;:-создание-карты-в-трекере;;2"
    },
    {
      "cells": [
        "название карточки 2",
        "описание карточки 2"
      ],
      "line": 15,
      "id": "карточки-в-трекерt;:-создание-карты-в-трекере;;3"
    }
  ],
  "keyword": "Примеры"
});
formatter.before({
  "duration": 9079345282,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": ": Создание карты в трекере",
  "description": "",
  "id": "карточки-в-трекерt;:-создание-карты-в-трекере;;2",
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
  "duration": 2403237020,
  "status": "passed"
});
formatter.match({
  "location": "CardStepsDefinition.selectProject()"
});
formatter.result({
  "duration": 386667979,
  "status": "passed"
});
formatter.match({
  "location": "CardStepsDefinition.gotoBugTracker()"
});
formatter.result({
  "duration": 929649525,
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
  "duration": 2512101098,
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
  "duration": 446088369,
  "status": "passed"
});
formatter.after({
  "duration": 560275129,
  "status": "passed"
});
formatter.before({
  "duration": 7470573007,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": Создание карты в трекере",
  "description": "",
  "id": "карточки-в-трекерt;:-создание-карты-в-трекере;;3",
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
  "name": "создать карточку с названием название карточки 2 и описанием описание карточки 2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "И "
});
formatter.step({
  "line": 10,
  "name": "на странице видна карточка с названием название карточки 2",
  "matchedColumns": [
    0
  ],
  "keyword": "То "
});
formatter.match({
  "location": "CardStepsDefinition.gotoProjectList()"
});
formatter.result({
  "duration": 2173293916,
  "status": "passed"
});
formatter.match({
  "location": "CardStepsDefinition.selectProject()"
});
formatter.result({
  "duration": 480276010,
  "status": "passed"
});
formatter.match({
  "location": "CardStepsDefinition.gotoBugTracker()"
});
formatter.result({
  "duration": 765138300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "название карточки 2",
      "offset": 29
    },
    {
      "val": "описание карточки 2",
      "offset": 61
    }
  ],
  "location": "CardStepsDefinition.createCardOnTracker(String,String)"
});
formatter.result({
  "duration": 2743906495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "название карточки 2",
      "offset": 39
    }
  ],
  "location": "CardStepsDefinition.verifyCardCreated(String)"
});
formatter.result({
  "duration": 267119004,
  "status": "passed"
});
formatter.after({
  "duration": 746472421,
  "status": "passed"
});
});