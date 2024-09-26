const userModel = require('./model');
const responsehandler = require('../../utills/responseHandler');

const get = async (req, res) => {
    try {
        const result = [
            {
              label: 'PARKS',
            },
            {
              label: 'HOME',
            },
            {
              label: 'WONDERLA BHUBANESWAR',
            },
            {
              label: 'RESORT',
            },
            {
              label: 'PARK TIMINGS AND TICKETS',
              items: [
                {
                  label: 'WONDERLA KOCHI TIMINGS AND TICKETS'
                },
                {
                  separator: true,
                },
                {
                  label: 'WONDERLA BENGALURU TIMINGS AND TICKETS'
                },
                {
                  separator: true,
                },
                {
                  label: 'WONDERLA HYDRABAD TIMINGS AND TICKETS'
                },
                {
                  separator: true,
                },
                {
                  label: 'WONDERLA BHUBANESWAR TIMINGS AND TICKETS'
                },
              ]
            },
            {
              label: 'OFFERS',
              items: [
                {
                  label: 'FUNTASTIC FOUR OFFER BUY 3, GET 1 FREE'
                },
                {
                  separator: true,
                },
                {
                  label: 'ONAM BUY 2 GET 1 OFFER - WONDERLA KOCHI'
                },
                {
                  separator: true,
                },
                {
                  label: 'BUY 1 GET 1 FREE AT WONDERLA BHUBANESWAR'
                },
                {
                  separator: true,
                },
                {
                  label: 'DEFENCE PASS - BUY 2 GET 2 FREE'
                },
                {
                  separator: true,
                },
                {
                  label: '25% OFF ON WEDNESDAYS AT WONDERLA RESORT'
                },
                {
                  separator: true,
                },
                {
                  label: 'MONSOON MADNESS - 20% OFF WONDERLA RESORT'
                },
                {
                  separator: true,
                },
                {
                  label: 'BUY 2 GET 2 TICKETS FREE FOR WOMEN AT WONDERLA PARKS'
                },
                {
                  separator: true,
                },
                {
                  label: 'COLLEGE OFFER - 20% OFF ON TICKETS'
                },
                {
                  separator: true,
                },
                {
                  label: 'BIRTHDAYS OFFER BUY 1 GET 1 FREE'
                },
                {
                  separator: true,
                },
                {
                  label: 'EARLY BIRD OFFER'
                },
                {
                  separator: true,
                },
                {
                  label: 'BRUNCH AT WONDERLA RESORT'
                },
                {
                  separator: true,
                },
                {
                  label: 'STAY & PLAY AT WONDERLA'
                },
                {
                  separator: true,
                },
                {
                  label: 'WONDERLA RESORT DAY PACKAGE'
                },
                {
                  separator: true,
                },
                {
                  label: '2 NIGHT STAY AND PLAY'
                },
                {
                  separator: true,
                },
                {
                  label: '3 NIGHTS 4 DAYS PACKAGE'
                },
                {
                  separator: true,
                },
                {
                  label: 'RESORT & PARK DAY PACKAGE'
                },
                {
                  separator: true,
                },
                {
                  label: '20% OFF ON YOUR ZOOMCAR TRIP'
                },
                {
                  separator: true,
                },
                {
                  label: '15% OFF FOR TSRTC TRAVELLERS'
                },
                {
                  separator: true,
                },
                {
                  label: '15% OFF FOR BMTC TRAVELLERS'
                },
                {
                  separator: true,
                },
                {
                  label: '15% OFF FOR MO BUS AND TRAIN TRAVELLERS'
                },
              ]
            },
            {
              label: 'QUICK LINKS',
              items: [
                {
                  label: 'PLAN YOUR VISIT'
                },
                {
                  separator: true,
                },
                {
                  label: 'EVENTS'
                },
                {
                  separator: true,
                },
                {
                  label: 'DRESS CODE'
                },
                {
                  separator: true,
                },
                {
                  label: 'GETTING TO WONDERLA'
                },
                {
                  separator: true,
                },
                {
                  label: 'SPECIAL ACTIVITIES'
                },
              ]
            },
            {
              label: 'CONTACT US',
              items: [
                {
                  label: 'INQUIRY FORM'
                },
                {
                  separator: true,
                },
                {
                  label: 'PARKS & RESORT CONTACT'
                },
                {
                  separator: true,
                },
                {
                  label: 'AUTHORISED BUSINESS DEWVELOPMENT PARTNERS'
                },
                {
                  separator: true,
                },
                {
                  label: 'GROUP PACKAGES'
                },
              ]
            },
            {
              label: 'FOOD AND BEVERAGES',
              items: [
                {
                  label: 'RESTAURANTS'
                },
                {
                  separator: true,
                },
                {
                  label: 'ALL DAY MENU'
                },
              ]
            },
            {
              label: 'MERCHANDISE',
            },
            {
              label: "TOUR OPERATOR'S PORTAL",
            },
            {
              label: 'INVESTOR RELATIONS',
              items: [
                {
                  label: 'BOARD OF DIRECTORS',
                },
                {
                  separator: true,
                },
                {
                  label: 'ANNUAL RETURN',
                },
                {
                  separator: true,
                },
                {
                  label: 'PROSPECTUS AND POLICIES',
                },
                {
                  separator: true,
                },
                {
                  label: 'QUARTERLY INVESTOR PRESENTATION',
                },
                {
                  separator: true,
                },
                {
                  label: 'ANNUALR REPORTS',
                },
                {
                  separator: true,
                },
                {
                  label: 'CORPORATE GOVERNMENT REPORT',
                },
                {
                  separator: true,
                },
                {
                  label: 'SHAREHOLDING PATTERN',
                },
                {
                  separator: true,
                },
                {
                  label: 'FINANCIAL RESULTS',
                },
                {
                  separator: true,
                },
                {
                  label: 'SHAREHOLDING INFORMATION',
                },
                {
                  separator: true,
                },
                {
                  label: 'E-VOTING RESULTS',
                },
                {
                  separator: true,
                },
                {
                  label: 'UNPAID DIVIDEND',
                },
                {
                  separator: true,
                },
                {
                  label: 'CONCALL',
                },
                {
                  separator: true,
                },
                {
                  label: 'NOTICES',
                },
                {
                  separator: true,
                },
                {
                  label: 'INVESTORS MEETINGS',
                },
                {
                  separator: true,
                },
                {
                  label: 'PRESS RELEASE',
                },
                {
                  separator: true,
                },
                {
                  label: 'UNCLAIMED IPO APPLICATION MONEY',
                },
                {
                  separator: true,
                },
                {
                  label: 'POSTAL BALLOT',
                },
                {
                  separator: true,
                },
                {
                  label: 'NOTICE TO PHYSICAL SHAREHOLDERS',
                },
                {
                  separator: true,
                },
                {
                  label: 'ADVERTISEMENT IN NEWSPAPERS',
                },
                {
                  separator: true,
                },
                {
                  label: 'RATING',
                },
                {
                  separator: true,
                },
                {
                  label: 'LEGAL COMPLIANCES',
                },
                {
                  separator: true,
                },
                {
                  label: 'NODAL OFFICER',
                },
                {
                  separator: true,
                },
                {
                  label: 'SECRETARIAL COMPLIANCE REPORT',
                },
                {
                  separator: true,
                },
                {
                  label: 'IEPF CLAIM PROCEDURE',
                },
                {
                  separator: true,
                },
                {
                  label: 'FAMILIARIZATION TO INDEPENDENT DIRECTORS',
                },
                {
                  separator: true,
                },
                {
                  label: 'COMMITTEES',
                },
                {
                  separator: true,
                },
                {
                  label: 'OUTCOME OF MEETINGS',
                },
                {
                  separator: true,
                },
                {
                  label: 'RELATED PARTY TRANSACTIONS',
                },
                {
                  separator: true,
                },
                {
                  label: 'UPDATES',
                },
                {
                  separator: true,
                },
                {
                  label: 'BUSINESS RESPONSIBILITY AND SUSTAINABLITY REPORT',
                },
              ]
            },
            {
              label: 'GREEN INITIATIVES',
              items: [
                {
                  label: 'GREEN INITIATIVES',
                }
              ]
            },
            {
              label: 'CSR INITIATIVES',
              items: [
                {
                  label: 'CSR INITIATIVES',
                }
              ]
            },
            {
              label: 'RULES AND REGULATIONS',
            },
            {
              label: 'CANCELLATION & RESCHEDULE',
            },
            {
              label: 'SAFETY AND HYGIENE',
            },
            {
              label: 'CAREERS',
              items: [
                {
                  label: 'JOB OPENINGS AT BENGALURU RESORT'
                },
                {
                  separator: true,
                },
                {
                  label: 'JOB OPENINGS AT WONDERLA BENGALURU'
                },
                {
                  separator: true,
                },
                {
                  label: 'JOB OPENINGS AT WONDERLA KOCHI'
                },
                {
                  separator: true,
                },
                {
                  label: 'JOB OPENINGS AT WONDERLA HYDRABAD'
                },
                {
                  separator: true,
                },
                {
                  label: 'APPLY'
                },
              ]
            },
            {
              label: 'ABOUT US',
              items: [
                {
                  label: 'ABOUT WONDERLAB'
                },
                {
                  separator: true,
                },
                {
                  label: 'ABOUT THE PROMOTERS'
                },
                {
                  separator: true,
                },
                {
                  label: 'AWARDS AND ACCOLADES'
                },
              ]
            },
            {
              label: 'WONDERLAB',
              items: [
                {
                  label: 'WELCOME TO WONDERLAB'
                },
                {
                  separator: true,
                },
                {
                  label: 'ENROLMENT FORM'
                },
                {
                  separator: true,
                },
                {
                  label: 'SCIENCE DAY @ WONDERLAB'
                },
              ]
            },
            {
              label: 'OUR PEOPLE',
            },
            {
              label: 'SPECIAL ACTIVITIES',
              items: [
                {
                  label: 'SATURNIGHT FEVER AT WONDERLA PARKS'
                },
                {
                  separator: true,
                },
                {
                  label: 'SATURNIGHT FEVER AT WONDERLA RESORT'
                },
                {
                  separator: true,
                },
                {
                  label: 'SATURNIGHT FEVER POOL PARTY'
                },
                {
                  separator: true,
                },
                {
                  label: 'SUNDAY BRUNCH LIVE'
                },
                {
                  separator: true,
                },
                {
                  label: 'HOLI BASH AT WONDERLA AMUSEMENT PARKS AND RESORT'
                },
                {
                  separator: true,
                },
                {
                  label: "VALENTINE'S DAY"
                },
                {
                  separator: true,
                },
                {
                  label: 'CHRISTMAS CELEBRATION'
                },
                {
                  separator: true,
                },
                {
                  label: 'ONAM'
                },
                {
                  separator: true,
                },
                {
                  label: 'DASARA'
                },
              ]
            },
        
          ];
        if (!result.error) {
            responsehandler.sentSuccessResponse(res, result);
        } else {
            responsehandler.sentErrorResponse(res, result);
        }
    } catch {
        responsehandler.sentInternalServerErrorResponse(res);
    }
}

module.exports = {
    get,
};