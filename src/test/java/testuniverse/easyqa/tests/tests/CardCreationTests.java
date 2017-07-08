package testuniverse.easyqa.tests.tests;

import io.qameta.allure.Step;
import org.testng.Assert;
import org.testng.annotations.Test;
import testuniverse.easyqa.tests.objectModels.CardData;


public class CardCreationTests extends TestBase {

    @Test
    public void testCardCreation() {

        app.getNavHelper().gotoProjectsList();
        app.getNavHelper().selectProject();
        app.getNavHelper().gotoBugTracker();
        //а тут не просто параметр, а сразу инициализация объекта класса карточка с данными
        CardData cardData = new CardData("карточка 3", "описание карточки 3");
        app.getCardHelper().createCardOnTracker(cardData);
        boolean hasCard=app.getCardHelper().verifyCardCreated(cardData.getCardName());
        Assert.assertEquals(true, hasCard);

    }

}
