---
layout: help
title: FAQ
permalink: /faq/
weight: 8

categories:



  - title: Basics
    subtitle: The kitchen sink
    topics:

    - title: Mission
      content: |
        We are using Pigeoncoin, a mineable cryptocurrency, to build a social network which will never have to collect user data to pay the bills.

    - title: Name
      content: |
        Pigeons have been used throughout history to send messages. We're applying the pigeon's legacy to modern communications.

    - title: Get involved
      content: |
        Socialize with us on [Discord]({{ site.social.Discord }}), follow us on [Twitter]({{ site.social.Twitter }})

    - title: Social
      content: |
        Our official social media accounts are
        {% for link in site.social %}
          {% if forloop.last == true %}
          and
          {% endif %}
          <a href="{{link[1]}}">{{ link[0] }}</a>
        {% endfor %}

    - title: Wallet
      content: |
        We release wallets for
        {% for platform in site.wallets %}
          {% if forloop.last == true %}and{% endif %}
          <a href="{{ platform[1] }}">{{ platform[0] }}</a>
        {% endfor %}

    - title: Mining
      content: |
        Our community has created GPU mining software for
        {% for platform in site.miners %}
          {% if forloop.last == true %}and{% endif %}
          <a href="{{ platform[1] }}"> {{ platform[0] }}</a>
        {% endfor %}

        Download our wallet, create a receiving address, and point your miner to `ccminer -a x16s -o stratum+tcp://{{site.pool.address}} -u {{ site.donate.pgn }}`, replacing our wallet address with your own. This will set you up with our [official mining pool]({{site.pool.website}}).

    - title: Exchanges
      content: |
        Our official exchange is currently [CryptoBridge]({{ site.exchanges.CryptoBridge }}). You can trade Pigeoncoin (PGN) against Bitcoin, Litecoin, and Ravencoin.


  - title: Tech
    subtitle: The nitty gritty
    topics:

    - title: Consensus
      content: |
         We use the proof-of-work Satoshi blockchain because, quite frankly, it is proven to work. With nine years of battle hardened security, we can rely on it as a source of truth.

    - title: Algorithm
      content: |
        We debuted X16S (shuffle) as an improved version of X16R (random). We improved hashrate and power consistency with no drawbacks. We are proud to have our algorithm listed under the MIT license. We believe that if the algorithm is good, it should be used by any coin who will benefit from it. In fact, we recommend that any coin forking to a new algorithm consider using X16S (shuffle) as a wrapper for their existing method. If you are a coin founder with questions about this, please reach out via [Discord]({{ site.social.Discord }})

    - title: Supply
      content: |
        We issue 5000 PGN per block, with a blocktime of one minute, and a halving interval of approximately 4 years. Maximum supply is approximately 21B, of which only a small fraction has been issued so far.





  - title: Investors
    subtitle: Our elevator pitch
    topics:

    - title: Elevator pitch
      content: |
        We are a software startup that is using our mineable cryptocurrency and our mining pool (wip) to fund a social network called Pigeon. This social network will never need to sell bulk user data, will have an integrated cryptocurrency wallet, and will be designed for the general public.

    - title: Innovation
      content: |
        We have created a new funding mechanism for a social network. We are designing our mining pool for mass adoption so that the fee can be used to fund all of the operating costs of the social network. Mining with our pool is a no-brainer because the value will be directly affected by the amount of revenue that the pool generates.

    - title: Private investment
      content: |
          If you are an accredited investor and have a specific request, please reach out to the team via [Discord]({{ site.social.Discord }}).

    - title: Invest
      content: |
          You can obtain Pigeoncoin by mining with a graphics card or trading on one of our verified exchanges.


---
What is the use case?
Where is the roadmap?
Where is the whitepaper?

Where is the latest wallet release?
Which pool should I use?
Which miners should I use?
