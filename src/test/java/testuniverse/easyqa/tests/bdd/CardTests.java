package testuniverse.easyqa.tests.bdd;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Created by Любовь on 07.07.2017.
 */
@CucumberOptions(features = "classpath:bdd", plugin = {"pretty", "html:build/cucumber-report"} )
public class CardTests extends AbstractTestNGCucumberTests {
}
