package testuniverse.easyqa.tests.bdd;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.ru.Дано;
import cucumber.api.java.ru.Если;
import cucumber.api.java.ru.И;
import cucumber.api.java.ru.То;
import io.qameta.allure.Step;
import org.openqa.selenium.remote.BrowserType;
import testuniverse.easyqa.tests.appManager.ApplicationManager;
import testuniverse.easyqa.tests.objectModels.CardData;

import java.io.IOException;

/**
 * Created by Любовь on 07.07.2017.
 */
public class CardStepsDefinition {

    private ApplicationManager app;
    public CardData cardData;

    @Before
    public  void init() throws IOException {
        app = new ApplicationManager(System.getProperty("browser", BrowserType.FIREFOX));
        app.init();
    }

    @After
    public void stop(){
        app.stop();
        app = null;
    }

    @Step @Если("^нажать на список проектов$")
    public void gotoProjectList (){
        app.getNavHelper().gotoProjectsList();
    }

    @Step @И("^нажать на название проекта$")
    public void selectProject (){
        app.getNavHelper().selectProject();
    }

    @Step @И("^нажать на Баг Трекер$")
    public void gotoBugTracker (){
        app.getNavHelper().gotoBugTracker();
    }

    @Step @И("^создать карточку с названием (.+) и описанием (.+)$")
    public void createCardOnTracker (String cardName,String cardDescription){
        cardData = new CardData (cardName, cardDescription);
        app.getCardHelper().createCardOnTracker(cardData);
    }

    @Step @То("^на странице видна карточка с названием (.+)$")
    public void verifyCardCreated (String cardName){
        assert (app.getCardHelper().verifyCardCreated(cardData.getCardName()));;
    }

}
