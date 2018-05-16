---
layout: roadmap
title: Roadmap
permalink: /roadmap/
weight: 9

roadmap:

  - project:
    name: General

    details:
      - title: Stats page
        date: April 30, 2018
        progress: 100
        content: |
          The stats page is complete!

          We felt it was important to have a beautiful and accessible stats page to help everyone understand the market and our blockchain. In order to deploy this system, we had to first design and build an API server to collect and deliver all the nitty gritty datapoints we collect from exchanges and our block explorer.

          Since we *love* Discord, we then wired it into our bot, so people can ~~spam #general~~ check stats easily.

          These commands are now available on Discord:

          `!price, !volume, !marketcap, !supply, !hashrate, !difficulty, !blocktime, !retarget`

          We love the stats page, and hope you do too!


      - title: Software stack
        date: April 30, 2018
        progress: 100
        content: |

          We have a lot of work to do and limited resources. We need a software stack that allows us to build Terahash Pool and the Pigeon social network. We will need bespoke backends, web apps, desktop apps, and mobile apps. It all needs be blazing fast and work in realtime.

          After lots of research and soul-searching, we decided on a Javascript stack. This allows us to focus on one language, giving us more time to master frameworks and libraries.

          | *Backend* | *Frontend*    |
          | Firebase  | Bulma         |
          | Express   | jQuery        |
          | Node.js   | React (Native)|

          We are still investigating Firebase, but it provides a *lot* of advantages to a small team with big ideas, especially if we want stupid-fast realtime data that syncs and performs for a worldwide audience.

          Hey! If you're a Javascript dev and want to help out, we'd love to hear from you!


      - title: Wallet update
        date: May 14, 2018
        progress: 90
        content: |
          We have a very important update to Core wallet that will be released shortly.

          **Branding**
          - Envelope logo

          **Security**
          - OpenSSL upgrade
          - Checkpoints
          - TXdata

          **Nitpicks**
          - Copyright date

          We've finished up testing and will be releasing it shortly!


      - title: Bitcoin upstream
        date: January 1, 2019
        progress: 20
        content: |
          We use the Satoshi blockchain with our X16S (shuffle) algorithm, one minute blocks, and 5000 PGN block rewards. Everything else is pure Satoshi. This is deliberate. We strongly believe that it is arrogant to use custom systems for a public cryptocurrency ledger. The Satoshi blockchain has nine years of battle-hardened security built in.

          After all, this isn't some kind of game. This is real money that belongs to real people.

          We are currently built on Bitcoin core 0.15.99, the last version before Bitcoin team released SegWit in revision 0.16.00. It is our duty to merge these and future updates with our core source. This is important because it will keep us up to date with critical technology and most importantly, security.

          We refuse to use any ledger system that is not proven to be secure.


  - project:
    name: Terahash Pool

    details:

      - title: Overview
        date: August 22, 2018
        progress: 20
        content: |


          Pools and mining fees are a fact of proof-of-work cryptocurrencies. What if those fees were an investment?

          Meanwhile, social networks have to sell advertising to be viable. What if miners could effortlessly support a social network free from advertising or paid accounts?

          We are launching Terahash Pool which will vastly improve the mining experience, add value to Pigeoncoin, and give us the funds we need to achieve our goals.

          ### Terahash Pool

          - Selectable funding initiatives
          - Adjustable fee
          - One terahash capacity
          - Realtime stats & payment notifications
          - Enterprise DDoS mitigation

          You'll be able to pick a specific project to fund and watch it fill up with coins. You will have access to notifications and realtime data. Our fee will not exceed 1%. If you want to donate more, and we suspect many of our miners will, then you'll be able to adjust your fee at any time.

          Terahash Pool allows our miners to turn their hashrate into a voice in the project. It also gives us a unique funding mechanism that will separate us from all the previous attempts to create a robust social network.


      - title: Terahash backend
        date: June 31, 2018
        progress: 30
        content: |

          Our design capacity is to handle 33% of the network hashrate for the next year without scaling. Looking at the hashrate growth of other similar coins, we set our design capacity to one terahash.

          Pigeoncoin miners average 33 MH, so our requirements for Terahash Pool is 30,000 simultaneous connections. We will be handling this with clustering on scalable cloud servers. These servers will keep users up to date through a realtime database that delivers stats and payment information instantly.

          We will be using industrial controls methods to handle Stratum difficulty for each mining connection. This will cut down on Stratum spam and make it easier to handle 30k connections while negating the need for miners to adjust their initial settings manually.

          We will be releasing the backend as an open source project so others may add features and create a vibrant, easy to use, community pool system.

          Terahash Pool will be secured and shielded by a variety of methods, ranging from bandwidth oversubscription to the use of a global content delivery network. This ship is going to be seaworthy.


      - title: Realtime frontend
        date: July 31, 2018
        progress: 10
        content: |

          It's important to us that our users be able to easily understand the projects they are donating to, the status of their payments, and the benefits of mining with us. Everyone should be able to select how much of their mining revenue should be invested into each project.

          We envision a user interface that allows you to see all critical mining information and payment status at a glance, and allow you to browse through the projects that need funding. From there you can choose how much you want to invest, and which projects are most important to you. The progress of each funding initiative will update in realtime so you can watch the mining community bring community goals to fruition.


  - project:
    name: Pigeon Beta

    details:

      - title: Goals
        date: November 1, 2018
        progress: 10
        content: |

          Our goal is to create a social network free from advertising and premium accounts. This is a huge undertaking and we are considering the stages thoughtfully and acting deliberately to achieve these goals.

          The first step is to setup funding through Terahash Pool. Social network privacy is directly related to the funding mechanism of the social network, and this method of funding will ensure that we can operate without ever needing to sell user data.

          The second step is to form a legal entity in the United States so that we may be compliant with all regulations. This entity will be structured in such a way that we can bring on critical investors, especially those with experience operating networks at scale.

          The third step is to build a prototype of the social network and select community members to participate in our beta. We will be using this beta to hone our social network into something truly amazing.

          Then we launch Pigeon to the world and get average users on a platform which behind the scenes is fueled by a blockchain network.


          We envision three sides to Pigeon. Public posting, private messaging, and payments. We will prove our dedication to privacy by having a global data burn on the network.


      - title: Data burn
        date: August 1, 2018
        progress: 5
        content: |
          *If you've forgotten about a conversation, shouldn't the conversation be forgotten?*

          One of our core features is a global data burn that is across the entire social network. This is a complicated problem when it comes to user experience, since people generally don't expect their stuff to disappear online. That said, we truly believe that this will be a paradigm shift for online services, so its important to get it right.

          Is it 30 days? Is it 90 days? Can you opt out on when posting publicly? Can you opt out when messaging? Can you opt out on a single item?

          Is there a prune time for unused accounts? Is it 365 days? Can you recover a user with wallet mnemonic keys?

          These questions and more must be answered, and many of them will likely be answered by our users during Pigeon Beta.


      - title: Posting
        date: September 1, 2018
        progress: 5
        content: |
          Public posting is the bread-and-butter of social media networks. We want people to be able to socialize in public groups easily.

          We envision a system where swiping a post provides simple actions relating to the social process... reactions, hide, share and so on.

          We also envision a way for people to tag their posts, allowing people to access a topic and comment with others in realtime.

          We are still working on the details and will update this section as we progress.


      - title: Messaging
        date: October 1, 2018
        progress: 5
        content: |
          Private messaging requires the utmost care with user privacy. All private messages should have end-to-end encryption.

          We envision a system where payments can be made during a private message with ease.

          We are still working on the details and will update this section as we progress.


      - title: Payments
        date: January 1, 2019
        progress: 5
        content: |
          Cryptocurrencies are useless if they aren't being used. Our goal is to provide a Pigeoncoin (PGN) payments platform that is accessible to anyone. We envision a wallet system built into the social network that is easy to use and easy to obtain PGN.

          We are still working on the details and will update this section as we progress.


      - title: Verified users
        date: TBD
        progress: 5
        content: |
          We'd like to allow anyone to obtain verification to Know Your Customer standards. We believe this should be available to anyone, not just people of public interest.

          We are still trying to solve how to offer this without making a premium user tier and will update this section as we progress.


---
