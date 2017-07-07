package testuniverse.easyqa.tests.appManager;


import io.qameta.allure.Step;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import testuniverse.easyqa.tests.objectModels.CardData;

public class CardHelper extends BaseHelper {

    public CardHelper(WebDriver rd) {
        super(rd);
    }

    @Step
    public void createCardOnTracker(CardData cardData) {
        //создаем карточку
        initCardCreation();
        //название карточки
        typeTextIntoElement("issue_summary", cardData.getCardName());
        //описание карточки
        typeTextIntoElement("issue_description", cardData.getCardDescription());

        //выбираем тип и приоритет
        clickAtSelectItem("issue_priority", "Высокий");
        clickAtSelectItem("type-view", "Задание");

        //сохраняем
        rd.findElement(By.name("commit")).click();
    }

    @Step
    public void initCardCreation() {
        //создаем карточку
        clickOnLink("Создать карточку");
    }

    @Step
    public boolean verifyCardCreated(String cName){
        return rd.findElement(By.xpath("//*[contains(text(),'" + cName + "')]")).isDisplayed();
    }

}
