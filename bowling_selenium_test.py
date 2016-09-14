# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class BowlingSeleniumTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()
        self.driver.implicitly_wait(30)
        self.base_url = "http://localhost/"
        self.verificationErrors = []
        self.accept_next_alert = True
    
    def test_bowling_selenium(self):
        driver = self.driver
        driver.get(self.base_url + "/bowling/index.php")
        driver.find_element_by_link_text("Game #12910").click()
        driver.find_element_by_id("frame1_1").clear()
        driver.find_element_by_id("frame1_1").send_keys("x")
        driver.find_element_by_id("frame2_1").clear()
        driver.find_element_by_id("frame2_1").send_keys("x")
        driver.find_element_by_id("frame3_1").clear()
        driver.find_element_by_id("frame3_1").send_keys("x")
        driver.find_element_by_id("frame4_1").clear()
        driver.find_element_by_id("frame4_1").send_keys("x")
        driver.find_element_by_id("frame5_1").clear()
        driver.find_element_by_id("frame5_1").send_keys("x")
        driver.find_element_by_id("frame6_1").clear()
        driver.find_element_by_id("frame6_1").send_keys("x")
        driver.find_element_by_id("frame7_1").clear()
        driver.find_element_by_id("frame7_1").send_keys("x")
        driver.find_element_by_id("frame8_1").clear()
        driver.find_element_by_id("frame8_1").send_keys("x")
        driver.find_element_by_id("frame9_1").clear()
        driver.find_element_by_id("frame9_1").send_keys("x")
        driver.find_element_by_id("frame10_1").clear()
        driver.find_element_by_id("frame10_1").send_keys("x")
        driver.find_element_by_id("frame10_2").clear()
        driver.find_element_by_id("frame10_2").send_keys("x")
        driver.find_element_by_id("frame10_3").clear()
        driver.find_element_by_id("frame10_3").send_keys("x")
        driver.find_element_by_id("num_of_beers").clear()
        driver.find_element_by_id("num_of_beers").send_keys("2")
        driver.find_element_by_id("calculate_button").click()
        try: self.assertEqual("300", driver.find_element_by_id("total_score").text)
        except AssertionError as e: self.verificationErrors.append(str(e))
    
    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
