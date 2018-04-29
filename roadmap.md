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
        progress: 80
        content: |

          We have a ton of projects lined up that will require ground-up design and development. It's important to us that we don't waste time and also prepare for the future. We are currently developing the website, a bespoke pool system, a desktop wallet, mobile wallet, and eventually a social and messaging network.

          After consideration, we are have committed to a Javascript stack. This allows us to focus on one language, giving us more time to master new frameworks and libraries. We expect to use the following...

          | *Backend* | *Frontend*    |
          | MongoDB   | Bulma         |
          | Express   | jQuery        |
          | Node.js   | React (Native)|

          We are also looking into Firebase as it provides a *lot* of advantages to a small team with big ideas. Especially since it seems to work well with PWAs, which would allow us to bypass the App Store for launching an iOS wallet. Very few projects have been able to launch an iOS app because of the restrictions in place.

          Hey! If you're a Javascript dev and want to help out, we'd love to hear from you!


      - title: OpenSSL update
        date: May 14, 2018
        progress: 70
        content: |
          We have a very important update to Core wallet that will be released shortly.

          **Security**
          - OpenSSL upgrade
          - Checkpoints
          - TXdata

          **Nitpicks**
          - Copyright date

          We haven't released it yet because we are finishing up our testing. So far so good!

          These small fixes are not easy to see, but they give us all peace of mind.

      - title: SegWit update
        date: September 31, 2018
        progress: 10
        content: |
          We use the Satoshi blockchain with our X16S (shuffle) algorithm, one minute blocks, and 5000 PGN block rewards. Everything else is identical. This is deliberate. We strongly believe that it is arrogant to use any other system for a public cryptocurrency ledger. The Satoshi blockchain has nine years of battle-hardened security built in.

          After all, this isn't some kind of game. This is real money that belongs to real people.

          Bitcoin launched SegWit with the 0.16 Bitcoin Core wallet, and since we are on 0.15.99 core, it is our duty to merge these updates. During this time we intent to set Bitcoin as upstream on GitHub and make sure SegWit is working 100%.

          This is important because it will reduce transaction fees, improve transaction speed, and make sure we are set up for the future. We refuse to be a boat anchor when the rest of the world is moving to SegWit.


  - project:
    name: Terahash 1


    details:

      - title: Introduction
        content: |

          Cryptocurrency projects are often at the mercy of donations and finding volunteers. We knew from day one that it would be critical to secure revenue so that we could form a legal entity in the United States and start paying our team while hiring more dedicated professionals.

          Since we are a proof-of-work blockchain, miners are are the backbone of our network. Currently they are forced to pay fees to an anonymous pool operator who has no interest in improving Pigeoncoin. Pools have notoriously poor quality of service and often suffer from distributed denial-of-service attacks.

          So we got to thinking... what if mining fees could be used to fund *specific projects*. What if there was a pool that could always handle 33% of the network hashrate where miners could pick projects that their fees would fund. What if this pool was impervious to attacks?

          Well, that's exactly what we're going to build... and it's called **Terahash 1**.

          Want us on a specific exchange? Great! Pick the associated funding initiative and watch the project get funded in real time. Congratulations, for the first time in your life, pool fees are no longer fees, they are an investment and a voting mechanism.

          Best of all, **the cost to mine with us will always be 1%.** That said, if you want to donate more, and we suspect many of our miners will, then you'll be free to adjust your fee at any time.

          Terahash 1 will be the first pool that allows users to re-invest 100% of their mining fees and turn their hashrate into a voice in the project.


      - title: Terahash backend
        date: June 25, 2018
        progress: 30
        content: |
          We set a goal to be able to handle 33% of the network hashrate for the next two years. Looking at the hashrate growth of other similar coins, we set our design capacity to one terahash.

          Pigeoncoin miners average 33 MH, so our requirements for Terahash 1 is 30,000 simultaneous connections. We will be handling this with Node clusters on scalable cloud servers.

          We will be using industrial controls (proportional-integral-derivative algorithm) to handle stratum difficulty for each mining connection. This will cut down on spam and make it easier to handle 30k connections while negating the need to adjust your initial settings manually.

          Terahash 1 will be secured and shielded by a variety of methods, ranging from bandwidth oversubscription, server scaling, and the use of a content delivery network and distributed domain name servers. This ship is going to be seaworthy.


      - title: Realtime frontend
        date: June 25, 2018
        progress: 10
        content: |
          It's important to us that our users be able to easily understand the projects they are donating to, the status of their payments, and the benefits of mining with us. Everyone should be able to select how much of their mining revenue should be invested into each project.

          We have been working on user experience and user interface design and have been investigating realtime backend platforms that will keep all the information up-to-date whether you're accessing the platform on mobile or desktop.

          We envision a user interface that allows you to see all critical mining information and payment status at a glance, and allow you to browse through the projects that need funding. From there you can choose how much you want to invest, with 1% being the default, and which projects are most important to you. The progress of each funding initiative will update in realtime so you can see the progress you've created along with our entire mining community.



  - project:
    name: Wallet

    details:
      - title: Verbal addresses
        date: null
        content: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.

      - title: Fast sync
        date: null
        content: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.

      - title: Multi-platform
        date: null
        content: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.



  - project:
    name: Messaging

    details:
      - title: Ethos
        content: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.

      - title: Data burn
        date: null
        content: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.

      - title: Verified users
        date: null
        content: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.

      - title: Payment velocity
        date: null
        content: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.


---
