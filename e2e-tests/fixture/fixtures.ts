import { test as base } from 'playwright-bdd';
import { brpCheckDetailsPage } from '../pages/brp-check-details-page';
import { brpCollectionPersonalDetailsPage } from '../pages/brp-collection-personal-details-page';
import { brpCollectionProblemHomePage } from '../pages/brp-collection-problem-home-page';
import { brpFromWhereWereYouAskedToCollectPage } from '../pages/brp-from-where-were-you-asked-to-collect-page';
import { brpHowContactAboutBrpPage } from '../pages/brp-how-contact-about-brp-page';
import { brpHowPersonalDetailsAppearPage } from '../pages/brp-how-personal-details-appear-page';
import { brpLostStolenHomePage } from '../pages/brp-lost-stolen-home-page';
import { brpLostStolenHowContactPage } from '../pages/brp-lost-stolen-how-contact-page';
import { brpLostStolenPersonalDetailsPage } from '../pages/brp-lost-stolen-personal-details-page';
import { brpLostStolenWhenRealisePage } from '../pages/brp-lost-stolen-when-realise-page';
import { brpLostStolenWhereAreYouNowPage } from '../pages/brp-lost-stolen-where-are-you-now-page';
import { brpNotArrivedContactUsPage } from '../pages/brp-not-arrived-contact-us-page';
import { brpNotArrivedHaveYouReceivedLetterFromHOPage } from '../pages/brp-not-arrived-have-you-received-letter-from-ho-page';
import { brpNotArrivedPersonalDetailsPage } from '../pages/brp-not-arrived-personal-details-page';
import { brpNotArrivedTrackingNumPage } from '../pages/brp-not-arrived-tracking-num-page';
import { brpNotArrivedWhereYouDueToCollectFromPOPage } from '../pages/brp-not-arrived-where-you-due-to-collect-from-po-page';
import { brpNotArrivedWouldYouLikeBrpSentPage } from '../pages/brp-not-arrived-would-you-like-brp-sent-page';
import { brpNotDeliveredHomePage } from '../pages/brp-not-delivered-home-page';
import { brpProblemAddressSameAsDeliveryPage } from '../pages/brp-problem-address-same-as-delivery-page';
import { brpProblemIsThereSuitableUkAddressPage } from '../pages/brp-problem-is-there-suitable-uk-address-page';
import { brpProblemWhatProblemPage } from '../pages/brp-problem-what-problem-page';
import { brpProblemWhereApplyPage } from '../pages/brp-problem-where-apply-page';
import { brpReportProblemHomePage } from '../pages/brp-report-problem-home-page';
import { brpSomeoneElsePersonalDetailsPage } from '../pages/brp-someone-else-personal-details-page';
import { brpSomeOneElseHomePage } from '../pages/brp-some-one-else-home-page';
import { brpWhyCouldNotCollectPostOfficePage } from '../pages/brp-why-could-not-collect-post-office-page';
import { brpWhyCouldNotCollectSponsorPage } from '../pages/brp-why-could-not-collect-sponsor-page';
import { brWhoSupposedToCollectPage } from '../pages/br-who-supposed-to-collect-page';
import { whoWouldYouLikeToNominatePage } from '../pages/who-would-you-like-to-nominate-page';
import { whyDoYouNeedSomeOneToCollectPage } from '../pages/why-do-you-need-some-one-to-collect-page';

export type Pages = {
  brpCheckDetailsPage: brpCheckDetailsPage;
  brpHowContactAboutBrpPage: brpHowContactAboutBrpPage;
  brpCollectionProblemHomePage: brpCollectionProblemHomePage;
  brpLostStolenHomePage: brpLostStolenHomePage;
  brpNotDeliveredHomePage: brpNotDeliveredHomePage;
  brpReportProblemHomePage: brpReportProblemHomePage;
  brpSomeOneElseHomePage: brpSomeOneElseHomePage;
  brpFromWhereWereYouAskedToCollectPage: brpFromWhereWereYouAskedToCollectPage;
  brpWhyCouldNotCollectPostOfficePage: brpWhyCouldNotCollectPostOfficePage;
  brpWhyCouldNotCollectSponsorPage: brpWhyCouldNotCollectSponsorPage;
  brWhoSupposedToCollectPage: brWhoSupposedToCollectPage;
  brpCollectionPersonalDetailsPage: brpCollectionPersonalDetailsPage;
  brpLostStolenWhereAreYouNowPage: brpLostStolenWhereAreYouNowPage;
  brpLostStolenWhenRealisePage: brpLostStolenWhenRealisePage;
  brpLostStolenPersonalDetailsPage: brpLostStolenPersonalDetailsPage;
  brpLostStolenHowContactPage: brpLostStolenHowContactPage;
  brpNotArrivedWhereYouDueToCollectFromPOPage: brpNotArrivedWhereYouDueToCollectFromPOPage;
  brpNotArrivedTrackingNumPage: brpNotArrivedTrackingNumPage;
  brpNotArrivedHaveYouReceivedLetterFromHOPage: brpNotArrivedHaveYouReceivedLetterFromHOPage;
  brpNotArrivedContactUsPage: brpNotArrivedContactUsPage;
  brpNotArrivedWouldYouLikeBrpSentPage: brpNotArrivedWouldYouLikeBrpSentPage;
  brpNotArrivedPersonalDetailsPage: brpNotArrivedPersonalDetailsPage;
  brpProblemWhereApplyPage: brpProblemWhereApplyPage;
  brpProblemWhatProblemPage: brpProblemWhatProblemPage;
  brpProblemIsThereSuitableUkAddressPage: brpProblemIsThereSuitableUkAddressPage;
  brpProblemAddressSameAsDeliveryPage: brpProblemAddressSameAsDeliveryPage;
  brpHowPersonalDetailsAppearPage: brpHowPersonalDetailsAppearPage;
  whoWouldYouLikeToNominatePage: whoWouldYouLikeToNominatePage;
  whyDoYouNeedSomeOneToCollectPage: whyDoYouNeedSomeOneToCollectPage;
  brpSomeoneElsePersonalDetailsPage: brpSomeoneElsePersonalDetailsPage;
};

export const test = base.extend<{ pages: Pages }>({
  pages: async ({ page }, use) => {
    await use({
      brpCheckDetailsPage: new brpCheckDetailsPage(page),
      brpHowContactAboutBrpPage: new brpHowContactAboutBrpPage(page),
      brpCollectionProblemHomePage: new brpCollectionProblemHomePage(page),
      brpLostStolenHomePage: new brpLostStolenHomePage(page),
      brpNotDeliveredHomePage: new brpNotDeliveredHomePage(page),
      brpReportProblemHomePage: new brpReportProblemHomePage(page),
      brpSomeOneElseHomePage: new brpSomeOneElseHomePage(page),
      brpFromWhereWereYouAskedToCollectPage: new brpFromWhereWereYouAskedToCollectPage(page),
      brpWhyCouldNotCollectPostOfficePage: new brpWhyCouldNotCollectPostOfficePage(page),
      brpWhyCouldNotCollectSponsorPage: new brpWhyCouldNotCollectSponsorPage(page),
      brWhoSupposedToCollectPage: new brWhoSupposedToCollectPage(page),
      brpCollectionPersonalDetailsPage: new brpCollectionPersonalDetailsPage(page),
      brpLostStolenWhereAreYouNowPage: new brpLostStolenWhereAreYouNowPage(page),
      brpLostStolenWhenRealisePage: new brpLostStolenWhenRealisePage(page),
      brpLostStolenPersonalDetailsPage: new brpLostStolenPersonalDetailsPage(page),
      brpLostStolenHowContactPage: new brpLostStolenHowContactPage(page),
      brpNotArrivedWhereYouDueToCollectFromPOPage: new brpNotArrivedWhereYouDueToCollectFromPOPage(page),
      brpNotArrivedTrackingNumPage: new brpNotArrivedTrackingNumPage(page),
      brpNotArrivedHaveYouReceivedLetterFromHOPage: new brpNotArrivedHaveYouReceivedLetterFromHOPage(page),
      brpNotArrivedContactUsPage: new brpNotArrivedContactUsPage(page),
      brpNotArrivedWouldYouLikeBrpSentPage: new brpNotArrivedWouldYouLikeBrpSentPage(page),
      brpNotArrivedPersonalDetailsPage: new brpNotArrivedPersonalDetailsPage(page),
      brpProblemWhereApplyPage: new brpProblemWhereApplyPage(page),
      brpProblemWhatProblemPage: new brpProblemWhatProblemPage(page),
      brpProblemIsThereSuitableUkAddressPage: new brpProblemIsThereSuitableUkAddressPage(page),
      brpProblemAddressSameAsDeliveryPage: new brpProblemAddressSameAsDeliveryPage(page),
      brpHowPersonalDetailsAppearPage: new brpHowPersonalDetailsAppearPage(page),
      whoWouldYouLikeToNominatePage: new whoWouldYouLikeToNominatePage(page),
      whyDoYouNeedSomeOneToCollectPage: new whyDoYouNeedSomeOneToCollectPage(page),
      brpSomeoneElsePersonalDetailsPage: new brpSomeoneElsePersonalDetailsPage(page),
    });
  },
});

export const expect = test.expect;