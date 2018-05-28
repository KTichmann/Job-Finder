import { addLocation, addKeyword, removeKeyword, addPosition, removePosition } from './reducer_functions'
import { combineReducers } from 'redux'

let defaultState = {
  preferences: {
     location: 'New+York',
     keywords: ['react']
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
      inList: true,
      dateCreated: '2018-05-15T18:27:23.000Z',
      jobObject: {
        id: '6ae7ff6c-586d-11e8-848b-9bded9cbe2a6',
        created_at: 'Tue May 15 18:27:23 UTC 2018',
        title: 'Full Stack .Net Developer',
        location: 'New York, NY',
        type: 'Full Time',
        description: '<p>Rockstar Games is seeking a talented and experienced Full Stack .NET Developer to join our online development team in NYC. With the rapid growth of Grand Theft Auto Online, and other long-term Social Club plans, the successful candidate will be working on bleeding edge technology with an internationally established team, while having great attention to detail, being a strong team player and have excellent communication skills.  </p>\n\n<p>We are looking for someone who is passionate about games, eager for new challenges, and ready to continue our legacy of creating the greatest games in the world.  </p>\n\n<h2>RESPONSIBILITIES</h2>\n\n<ul>\n<li>We create connected experiences that are found across our game franchises.</li>\n<li>We create online services for our games, including matchmaking, cloud saves, player stats, leaderboards, and more.</li>\n<li>We improve existing features as well as architect new solutions to support the development of the Social Club community and website.</li>\n<li>We create innovative in-game experiences, including user-generated content.</li>\n<li>We build services and tools that support our consumer-facing experiences and our internal business needs.</li>\n<li>We create companion apps to our games, including second screen experiences on mobile, tablet and the web.<br>\n</li>\n</ul><p>This position will be responsible for:  </p>\n\n<ul>\n<li>Development of front-end features and applications utilizing JavaScript (ReactJS).</li>\n<li>Integrating front-end applications with ASP.NET MVC and WebApi (C#).</li>\n<li>Web performance optimization.</li>\n<li>Collaboration with other Rockstar technology teams across our worldwide studios.</li>\n</ul><h2>QUALIFICATIONS</h2>\n\n<ul>\n<li>A degree in computer science or equivalent.</li>\n<li>3+ years of experience in professional web development.</li>\n<li>Great communication skills as a core member of an internationally-based team.</li>\n<li>Passion for web technologies and a desire to remain up to date with the latest technologies.</li>\n</ul><h2>REQUIRED SKILLS</h2>\n\n<ul>\n<li>Expert in C#.</li>\n<li>Expert in JavaScript/ES2015+ with experience in React or similar.</li>\n<li>Solid experience with T-SQL.</li>\n<li>Experience with source control, preferably Perforce.</li>\n<li>Knowledge of Agile software development processes.</li>\n<li>Application of software development best practices.</li>\n<li>Knowledge and application of web security best practices.</li>\n<li>Passion for games (especially Rockstar Games titles).</li>\n</ul><h2>PREFERRED SKILLS</h2>\n\n<ul>\n<li>Prior experience with Redis, MongoDb, RabbitMQ and automated testing.</li>\n<li>Experience authoring for mobile devices.</li>\n<li>Experience working on high-traffic, responsive websites and applications.</li>\n<li>Exposure to Elasticsearch and Python desirable.</li>\n</ul>',
        how_to_apply: '<p><a href="https://app.jobvite.com/j?cj=oFZc2fwC&amp;s=Github_Job_Posting">Apply here</a></p>',
        company: 'Rockstar Games',
        company_url: 'https://www.rockstargames.com',
        company_logo: 'http://github-jobs.s3.amazonaws.com/37aa1410-586c-11e8-9254-bb7fe1045a26.png',
        url: 'http://jobs.github.com/positions/6ae7ff6c-586d-11e8-848b-9bded9cbe2a6'
      }
    },
    {
      id: 'fd056bb4-5d2c-11e8-81fe-ff8269d94edd',
      inList: true,
      dateCreated: '2018-05-21T19:28:16.000Z',
      jobObject: {
        id: 'fd056bb4-5d2c-11e8-81fe-ff8269d94edd',
        created_at: 'Mon May 21 19:28:16 UTC 2018',
        title: 'Full Stack Software Developer ',
        location: 'New York',
        type: 'Full Time',
        description: '<p>automotiveMastermind’s engineering team is looking for Software Developer with 4+ years’ experience building enterprise-level applications. The ideal candidate should be able to bring best practices as well as fresh new ideas to the team. Curiosity and passion for coding.</p>\n\n<p>Requirements:</p>\n\n<p>Front-end developer with strong JavaScript, Angular, React or other front-end framework experience</p>\n\n<p>Good understanding of asynchronous request handling and XHR</p>\n\n<p>Good understanding of cross-browser compatibility issues and workarounds</p>\n\n<p>A self-starter with an enthusiasm for technology</p>\n\n<p>Strong analytical skills</p>\n\n<p>Strong communication skills</p>\n\n<p>The ability to work in a fast paced environment with fluid culture.</p>\n\n<p>Big Plus if you have:</p>\n\n<p>Test Driven Development (TDD), testing frameworks</p>\n\n<p>Full project life-cycle experience</p>\n\n<p>Experience building high-performance back-end services</p>\n\n<p>Understanding of REST principles</p>\n\n<p>C#  </p>\n\n<p>.Net Core</p>\n\n<p>CSS</p>\n\n<p>Develop apps that run on a cloud infrastructure - Azure, AWS, G-cloud</p>\n\n<p>Microservice implementation experience</p>\n\n<p>Working knowledge of GIT</p>\n\n<p>Working knowledge of Scrum, Agile.</p>\n\n<p>Working knowledge of Docker</p>\n\n<p>Working knowledge of Kubernetes or other orchestrator</p>',
        how_to_apply: '<p>Please apply: <a href="https://boards.greenhouse.io/automotivemastermind/jobs/969003">https://boards.greenhouse.io/automotivemastermind/jobs/969003</a></p>',
        company: 'automotiveMastermind',
        company_url: 'https://www.automotivemastermind.com/careers',
        company_logo: 'http://github-jobs.s3.amazonaws.com/f8104ef8-5d2c-11e8-9c5b-099ba471447d.png',
        url: 'http://jobs.github.com/positions/fd056bb4-5d2c-11e8-81fe-ff8269d94edd'
      }
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
    },
    {
      id: '1251a0b2-5f73-11e8-9093-cc96d3527819',
      inList: true,
      dateCreated: '2018-05-24T19:24:18.000Z',
      jobObject: {
        id: '1251a0b2-5f73-11e8-9093-cc96d3527819',
        created_at: 'Thu May 24 19:24:18 UTC 2018',
        title: 'Director of Engineering',
        location: 'New York, NY',
        type: 'Full Time',
        description: '<p>The Director of Engineering will be working on a platform with the mission to make the greatest possible positive impact on the world. This platform will perform at-scale to tackle the thorniest and most intractable problems facing organizations that serve humanity and the environment. If you’d like to work on something truly meaningful, this could be a dream job for you. </p>\n\n<p>This is an opportunity to work on an early-stage project, for someone who wants to dig deep, play a forward role, and take a lot of ownership. It’s ideal for someone who is excited by charting new technical territory, as we’re breaking significant ground. This position will report to the VP of Product, a leader in the data-product space who takes pride in developing talent on his team. </p>\n\n<p>This position will work out of Development Guild DDI’s New York (Manhattan) office. This is a full-time position.</p>\n\n<p>Required Technical and Work Experience</p>\n\n<ul>\n<li>Experience managing a team of developers</li>\n<li>Experience architecting shipped products</li>\n<li>Node.js</li>\n<li>Relational database experience and data modeling</li>\n<li>Test-Driven Development</li>\n<li>Experience with a modern front-end framework such as React, Vue or Angular</li>\n<li>Cloud deployment</li>\n<li>Experience with build tools like Gulp/Grunt/Webpack</li>\n</ul><p>Other Qualifications</p>\n\n<ul>\n<li>Startup experience</li>\n<li>Strong analytic skills </li>\n<li>Excellent communication, interpersonal skills, and presentation skills</li>\n<li>Excellent follow-through ability; can manage multiple tasks and people with strong attention to detail, leading engineering teams</li>\n<li>Strong organizational skills</li>\n<li>High level of professionalism, diplomacy, and responsiveness</li>\n<li>Volunteer or other mission-driven experience</li>\n</ul><p>About Development Guild\nDevelopment Guild DDI, is a storied firm that has worked for the benefit of nonprofits serving education, social justice organizations, the arts and culture, the environment, and healthcare. </p>\n\n<p>For more information about Development Guild DDI, please visit <a href="http://www.developmentguild.com">www.developmentguild.com</a></p>',
        how_to_apply: '<p>Please email your cover letter and resume in confidence to: </p>\n\n<p><a href="mailto:directorofengineering@developmentguild.com">directorofengineering@developmentguild.com</a></p>\n\n<p>Matthew Weber\nVICE PRESIDENT OF PRODUCT\nDevelopment Guild DDI</p>\n\n<p>All qualified candidates will receive consideration for employment without regard to race, color, religion, sex, national origin, disability or protected veteran status.</p>',
        company: 'Development Guild DDI, Inc.',
        company_url: 'https://www.developmentguild.com/',
        company_logo: 'http://github-jobs.s3.amazonaws.com/0e7203b0-5f73-11e8-959f-4061c60ff067.png',
        url: 'http://jobs.github.com/positions/1251a0b2-5f73-11e8-9093-cc96d3527819'
      }
    },
    {
      id: '90e0a47c-5f88-11e8-90d3-a7b70a48fa17',
      inList: true,
      dateCreated: '2018-05-24T19:28:30.000Z',
      jobObject: {
        id: '90e0a47c-5f88-11e8-90d3-a7b70a48fa17',
        created_at: 'Thu May 24 19:28:30 UTC 2018',
        title: 'Full Stack Developer',
        location: 'New York, NY',
        type: 'Full Time',
        description: '<p>The Full Stack Developer will be working on a platform with the mission to make the greatest possible positive impact on the world. This platform will perform at-scale to tackle the thorniest and most intractable problems facing organizations that serve humanity and the environment. If you’d like to work on something truly meaningful, this could be a dream job for you.</p>\n\n<p>This is an opportunity to work on an early-stage project, for someone who wants to dig deep, play a forward role, and take a lot of ownership. It’s ideal for someone who is excited by charting new technical territory, as we’re breaking significant ground. This position will report to the VP of Product, a leader in the data-product space who takes pride in developing talent on his team. </p>\n\n<p>This position will work out of Development Guild DDI’s New York (Manhattan) office. This is a full-time position.</p>\n\n<p>Required Technical Qualifications</p>\n\n<ul>\n<li>Node.js</li>\n<li>Relational database experience and data modeling</li>\n<li>Test-Driven Development</li>\n<li>Experience with a modern front-end framework such as React, Vue or Angular</li>\n<li>Cloud deployment</li>\n<li>Experience with build tools like Gulp/Grunt/Webpack</li>\n</ul><p>Other Qualifications</p>\n\n<ul>\n<li>Startup experience</li>\n<li>Strong analytic skills </li>\n<li>Excellent communication, interpersonal skills, and presentation skills</li>\n<li>Excellent follow-through ability; can manage multiple tasks and people with strong attention to detail, leading engineering teams</li>\n<li>Strong organizational skills</li>\n<li>High level of professionalism, diplomacy, and responsiveness</li>\n<li>Volunteer or other mission-driven experience</li>\n</ul><p>About Development Guild\nDevelopment Guild DDI, is a storied firm that has worked for the benefit of nonprofits serving education, social justice organizations, the arts and culture, the environment, and healthcare. </p>\n\n<p>For more information about Development Guild DDI, please visit <a href="http://www.developmentguild.com">www.developmentguild.com</a></p>',
        how_to_apply: '<p>Please email your cover letter and resume in confidence to:</p>\n\n<p><a href="mailto:fullstackdev@developmentguild.com">fullstackdev@developmentguild.com</a></p>\n\n<p>Matthew Weber\nVICE PRESIDENT OF PRODUCT\nDevelopment Guild DDI</p>\n\n<p>All qualified candidates will receive consideration for employment without regard to race, color, religion, sex, national origin, disability or protected veteran status.</p>',
        company: 'Development Guild DDI, Inc.',
        company_url: null,
        company_logo: 'http://github-jobs.s3.amazonaws.com/80b9ea86-5f88-11e8-8edb-7d00d90eb4f5.png',
        url: 'http://jobs.github.com/positions/90e0a47c-5f88-11e8-90d3-a7b70a48fa17'
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
