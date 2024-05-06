import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import {practice} from "./practice";
const pracComp = new practice();
When(/^I found count of vowel$/, ()=>{
    pracComp.vowelCount();
})
When(/^I reverse the string$/,()=>{
  //  pracComp.reverseStr();
  pracComp.findLargestNumber();
})
When(/^I want to find the count of characters in the string$/, ()=>{
  pracComp.charCount();

})
When(/^I want to check if the word is plaindrone$/, ()=>{
  pracComp.palindrome();
})
When(/^I want to have an array of even number$/, ()=>{
  pracComp.evenArray();
})
When(/^I multiply each array element by 2$/,()=>{
  pracComp.PerformMultiply();
})
When(/^I filter from an array$/, ()=>{
  pracComp.filterArray()
})