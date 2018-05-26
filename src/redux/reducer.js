import { addLocation, addKeyword, removeKeyword, addPosition, removePosition } from './reducer_functions'
import { combineReducers } from 'redux'

let defaultState = {
  preferences: {
     location: 'Washington',
     keywords: [
       'python',
       'web',
       'programming'
     ]
   },
   positions: [
     {
       id: 'dcb61050-550e-11e8-9da2-b0cf9ec80741',
       inList: true,
       dateCreated: '2018-05-11T11:31:56.000Z',
       jobObject: {
         id: 'dcb61050-550e-11e8-9da2-b0cf9ec80741',
         created_at: 'Fri May 11 11:31:56 UTC 2018',
         title: ' Backend (Architect) Lead ',
         location: 'Brooklyn',
         type: 'Full Time',
         description: '<p><strong>Backend (Architect) Lead</strong><br><br><strong>Core responsibilities</strong><br>\nCome join and exciting and talented team. This is a full stack team with challenges from React apps to building ETL pipelines. If you want to bring your skill set to bear across scalable distributed systems, commerce, state-of-the-art visualization, and deep logistics to solve the last mile delivery problem, then this job is for you.</p>\n\n<ul>\n<li>Lead design, development, implementation and maintenance of applications &amp; back-end services demonstrating service-oriented architecture and secure applications development technology best practices</li>\n    <li>Work with product managers and technical team in a cross-functional environment, to implement high quality products that meet business goals</li>\n</ul><p><br><strong>Core capabilities</strong></p>\n\n<ul>\n<li>Hands-on expertise in enterprise technology applications architecture, design, development and support</li>\n    <li>Great management and team development skills: ability to set goals for a team and every one of its members, delegate intelligently, mentor engineers, deliver frequent and honest feedback, help team members grow in their careers, and deliver results.</li>\n    <li>Expertise and interest in growing teams: interviewing junior and senior engineers, collaborating with recruiting, smoothly onboarding new team members.</li>\n    <li>Good software engineering methodology: meaningful and deeply-rooted opinions about testing and code quality, ability to make sound quality/speed trade-offs.</li>\n    <li>Passionate about writing code (yes you will write code)</li>\n    <li>Solid knowledge of applications performance improvement techniques and caching solutions</li>\n    <li>Experience developing with client-side web technologies {REACT, CSS, Javascript, AJAX}</li>\n    <li>Excellent problem solving, critical thinking and communication skills</li>\n    <li>Exceptional technical skills in backend (and frontend) engineering</li>\n    <li>Highly experienced with back-end programming languages {Ex: PHP, Python, Ruby, Java etc}</li>\n    <li>Solution design experience in large-scale projects, ideally of an eCommerce nature.</li>\n    <li>Expert in Java, NodeJS, Jenkins, GIT, RESTful APIs</li>\n    <li>MySQL DB experience would be advantage</li>\n</ul><p><br><strong>Requirements</strong><br>\nAcademic: BA/BS degree in computer science or equivalent.\u2028</p>\n\n<ul>\n<li>Professional: 5+ years experience developing software as an engineer; 2+ years experience as an engineering manager or technical lead</li>\n    <li>Significant experience building and operating critical high-scale systems.</li>\n</ul><p><br><strong>You\'re a great cultural fit if</strong>:<br>\nYou enjoy an environment where everyone is encouraged to add value at the most strategic level. You fit best in a fast-paced, high-integrity, low hand-holding environment. You are independent and self-motivated.<br><br><strong>Are you up for the challenge?</strong><br>\nSend us your CV and letter via the <a href="https://ltpx.nl/6EGvbgu" target="_blank"><strong>application form</strong></a>. For more information about our organization, please visit <a href="https://ltpx.nl/9cDufsN" target="_blank"><strong><a href="http://www.ajmadison.com">www.ajmadison.com</a></strong></a>.<br><br><em>Agency calls are not appreciated.</em><img alt="" src="https://bcontrol.brockmeyer.nl/track.php?orderid=46243"></p>',
         how_to_apply: '<p><a href="https://ltpx.nl/fzJ3L6o" target="_self">Click to apply</a></p>',
         company: 'AJ Madison',
         company_url: 'https://www.ajmadison.com/',
         company_logo: 'http://github-jobs.s3.amazonaws.com/d91be7f8-550e-11e8-9d12-0e6ca9e6d630.jpg',
         url: 'http://jobs.github.com/positions/dcb61050-550e-11e8-9da2-b0cf9ec80741'
       }
     },
     {
       id: '6ae7ff6c-586d-11e8-848b-9bded9cbe2a6',
       inList: false,
       dateCreated: '2018-05-15T18:27:23.000Z',
       jobObject: {}
     },
     {
       id: 'f5b73eaa-5df9-11e8-8379-a33cf7246450',
       inList: false,
       dateCreated: '2018-05-22T19:56:30.000Z',
       jobObject: {}
     },
     {
       id: '0a9333c4-71da-11e0-9ac7-692793c00b45',
       inList: false,
       dateCreated: '2018-04-24T13:39:44.000Z',
       jobObject: {}
     },
     {
       id: '89450de6-496e-11e8-8bd7-29d1c07e8855',
       inList: true,
       dateCreated: '2018-04-26T16:26:13.000Z',
       jobObject: {
         id: '89450de6-496e-11e8-8bd7-29d1c07e8855',
         created_at: 'Thu Apr 26 16:26:13 UTC 2018',
         title: 'Sr. Software Engineer, Core Services, Apple Media Products',
         location: 'New York, NY',
         type: 'Full Time',
         description: '<p>DESCRIPTION: Changing the world is all in a day\'s work at Apple. If you love innovation, here\'s your chance to make a career of it. You\'ll work hard. But the job comes with more than a few perks.</p>\n\n<p>The iTunes Store is looking for a software engineer to help build creative features that will delight millions of customers around the world.\n </p>\n\n<p>Key Qualifications:</p>\n\n<ul>\n<li>Authoritative knowledge of developing and scaling Java web applications with very stringent latency requirements.</li>\n<li>Strong object oriented design and analysis skills coupled with a deep understanding of data structures and algorithms.</li>\n<li>Experience in crafting and implementing RESTful APIs.</li>\n<li>Experience working with object relational databases like Hibernate, Enterprise Objects Framework etc.</li>\n<li>Extraordinary debugging, critical thinking, and interpersonal skills.</li>\n<li>Experience with one or more of the NoSQL solutions (Memcached, Redis, Voldemort, Cassandra, MongoDB, Solr etc.)</li>\n<li>Experience writing effective unit and integration tests.</li>\n<li>Knowledge of JVM-based languages like Clojure or Scala is a plus.</li>\n</ul><p>Description:\nBuild large scale web-based projects and features, ensuring robust &amp; maintainable solutions while paying special attention to performance and usability details. Effectively demonstrate feature prototypes to executives. You will develop, advocate for, and build consensus on, coding standard methodologies. Ability to effectively work with multi-functional teams to understand requirements and engineer highly performant implementations. Experience with crafting web applications that scale to millions of requests per second is highly preferred.\n </p>\n\n<p>Education:\nBS or MS in Computer Science. 5 years professional software engineering experience preferred.</p>\n\n<p>Apple is an Equal Opportunity Employer that is committed to inclusion and diversity. We also take affirmative action to offer employment and advancement opportunities to all applicants, including minorities, women, protected veterans, and individuals with disabilities. Apple will not discriminate or retaliate against applicants who inquire about, disclose, or discuss their compensation or that of other applicants.</p>\n\n<p>REQUISITION NUMBER: 113471078\nCOMPANY NAME: Apple Inc.</p>',
         how_to_apply: '<p>APPLY URL: <a href="https://ars2.equest.com/?response_id=33d1803f41764d18aab3a61b7d1400b5">https://ars2.equest.com/?response_id=33d1803f41764d18aab3a61b7d1400b5</a></p>',
         company: 'Apple Inc.',
         company_url: 'http://www.apple.com',
         company_logo: 'http://github-jobs.s3.amazonaws.com/7bc0b6f2-496e-11e8-8a82-16e5367ce5c0.jpeg',
         url: 'http://jobs.github.com/positions/89450de6-496e-11e8-8bd7-29d1c07e8855'
       }
     },
     {
       id: 'b081d4ce-5554-11e8-9483-2a957b764971',
       inList: false,
       dateCreated: '2018-05-11T19:52:07.000Z',
       jobObject: {}
     },
     {
       id: '8c00e9b8-5e01-11e8-8a13-b606c391c962',
       inList: true,
       dateCreated: '2018-05-22T20:51:08.000Z',
       jobObject: {
         id: '8c00e9b8-5e01-11e8-8a13-b606c391c962',
         created_at: 'Tue May 22 20:51:08 UTC 2018',
         title: 'Full Stack Software Engineer',
         location: 'New York, NY',
         type: 'Full Time',
         description: '<p>Care/of (takecareof.com) is a fast-growing, venture-backed wellness startup. We make it easier and more enjoyable to shop for vitamins (and maybe even a little fun, too). Our technology makes it possible for people to get custom vitamin recommendations based on their diets and health goals, which we deliver in convenient daily packs with a touch of joy. We aim to help people feel empowered to make the right choices for their health by being transparent about the research backing up our recommendations and the quality of our products. Care/of launched in 2016 and is based in New York City. (And we’re excited to meet you.)</p>\n\n<p>We are seeking a Software Writer with full-stack capabilities to join our team. You will join a highly-functioning group of expert craftspeople who treat our work as seriously as surgeons treat their patients. We temper that intensity with pervasive empathy and humor in a collaborative and caring work environment. Come help us orchestrate the balance between code that meets business requirements and the tests that ensure everything works smoothly - now and into the future. </p>\n\n<p>You will:</p>\n\n<ul>\n<li>Impact revenue by writing high-quality software from inception to execution to deployment</li>\n<li>Join a fast-moving team of 4 software writers who pump out relatively complex features with speed that belies our small size</li>\n<li>Automate our fulfillment activities to deliver new personalization options and accurate, speedy product delivery to our members</li>\n<li>Work in various levels of the web and mobile stacks from CSS to React, all the way down to the database and other infrastructure</li>\n<li>Iterate quickly by minimizing the scope of work and delivering with the most appropriate solution</li>\n<li>Scale our application to support rapidly growing demand and delivery platforms</li>\n<li>Improve our members’ lives by allowing delivery of their vitamins month after month and expand our offerings to include other product lines</li>\n<li>Either work from our sweet Lower Manhattan office or in a distributed fashion with regular visits to HQ</li>\n</ul><p>You should be:</p>\n\n<ul>\n<li>An excellent creator of production software that will meet tomorrow’s business needs and also satisfy today’s requirements over a period of 3+ years</li>\n<li>Able to exceed without extensive oversight while working with the business to define requirements before execution even when it requires teasing them out</li>\n<li>Experienced at writing tests that prove the quality of your work and prevent us from releasing regressions</li>\n<li>Comfortable working in Ruby, Rails, React (including Native), and JavaScript (we like ES7)</li>\n<li>Experienced implementing OO principles</li>\n<li>A team player who is interested being a part of a highly functioning team whose success you value over individual achievements</li>\n<li>Appetite to learn new stuff</li>\n<li>Interested in improving people\'s’ lives by improving their health</li>\n<li>Empathetic and respectful to others working around you</li>\n<li>Willing to work to change status quo when you think improvements are available</li>\n<li>Willing to work within established protocols while you go about changing them in order to maintain consistency across the application</li>\n</ul><p>Bonus Points</p>\n\n<ul>\n<li>Experience working with marketers and data scientists to uncover a story about members that allows us to better suit members’ needs.</li>\n<li>Solid understanding of API design principles and experiencing producing APIs for client-side consumers.</li>\n<li>DevOps experience, especially with Heroku, Gitlab, EC2, S3, Redshift, Segment, and Docker</li>\n<li>Functional programming experience</li>\n<li>Distributed team experience - we use Slack, Zoom, and Pivotal Tracker</li>\n<li>You are a fan of Sandi Metz and her rules (<a href="https://robots.thoughtbot.com/sandi-metz-rules-for-developers">https://robots.thoughtbot.com/sandi-metz-rules-for-developers</a>)</li>\n</ul><p>Benefits</p>\n\n<ul>\n<li>Flexible location with the understanding that there needs to be significant overlap in work hours</li>\n<li>Working for a business that cares as much about our employees as our members</li>\n<li>A data-centric view of the world where we understand that you can only change something that you are measuring</li>\n<li>Flexible vacation time</li>\n</ul>',
         how_to_apply: '<p><a href="https://boards.greenhouse.io/careof/jobs/839914">https://boards.greenhouse.io/careof/jobs/839914</a></p>',
         company: 'Care/of',
         company_url: 'https://takecareof.com/',
         company_logo: 'http://github-jobs.s3.amazonaws.com/83af59e8-5e01-11e8-8e48-5afcd1242560.jpg',
         url: 'http://jobs.github.com/positions/8c00e9b8-5e01-11e8-8a13-b606c391c962'
       }
     }
   ]
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD-LOCATION':
      return addLocation(state, action.payload.location)
    case 'ADD-KEYWORD':
      return addKeyword(state, action.payload.keyword)
    case 'REMOVE-KEYWORD':
      return removeKeyword(state, action.payload.keyword)
    case 'ADD-POSITION':
      return addPosition(state, {id: action.payload.id, inList: action.payload.inList, dateCreated: action.payload.dateCreated, jobObject: action.payload.jobObject})
    case 'REMOVE-POSITION':
      return removePosition(state, action.payload.id)
    default:
      return state;
  }
}

export default reducer;
