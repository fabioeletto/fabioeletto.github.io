<template>
  <f-writing-container
    title="HelixScripts"
    date="31th December 2021"
    :read-time-minutes="5"
  >
    <p class="mb-4">
      During my school years, I started buying limited-edition sneakers to
      resell for profit. However, as more people became interested in these
      releases, it became increasingly difficult to secure a pair since they
      sold out within seconds. I soon realized that the process of purchasing
      was always the same: logging in, selecting a size, entering your address,
      choosing a payment method, and completing the checkout. By consistently
      refining my approach, I discovered that the key to success lay in
      automating these steps for greater efficiency.
    </p>
    <p class="mb-4">
      A few friends and I teamed up to develop an automated solution for the
      checkout process of limited items, especially sneakers. Our team of four
      shares a passion for learning new things and we saw the project as an
      opportunity to develop new skills while also making some extra money by
      reselling on the side.
    </p>
    <p class="mb-4">
      Basically, it is a Chrome extension using web development technologies
      like HTML, CSS, and JavaScript. Chrome extensions are small software
      programs designed to customize and enhance the browsing experience. They
      allow users to modify browser functionality and behavior in various ways.
      Running in a separate, sandboxed environment, these extensions enable you
      to "extend" the browser by using APIs to interact with web content.
    </p>
    <p class="mb-4">
      We soon realized that we were not the only ones developing a
      resell-focused extension. However, our success matched or even surpassed
      that of others. To manage distribution, we decided to release our script
      to a select group of users—our beta testers. To restrict access, we
      implemented a licensing model. Each beta tester was required to log into
      our dashboard using their Discord account, allowing us to collect
      user-specific data such as user ID, name, and email. We then generated a
      unique license key for each user and stored it along with their Discord
      user ID and email in our database. To use the extension, users must log in
      with their Discord account and enter their license key. We then generate a
      unique fingerprint for each user to ensure that the script can only be
      used on one device at a time. This data is sent to our backend, where it
      verifies whether the user is authorized to log in. If a user wants to
      switch devices, they must first reset the key, which removes the old
      fingerprint from the database, allowing the new one to be stored.
    </p>
    <p class="mb-4">
      As more testers joined, I realized we had a responsibility to our users.
      Even though the product was free at that time, they expected regular bug
      fixes and improvements. The beta phase lasted about six months, during
      which we consistently pushed updates and gained a deeper understanding of
      the community. By the end of this period, we had developed a very stable
      product. Encouraged by user feedback, we decided to take the next big step
      and make the script available to a larger audience for a monthly fee.
      However, we still had some details to finalize, such as handling payments
      and deciding whether to build the user dashboard ourselves or use a
      service provider.
    </p>
    <p class="mb-4">
      Since our primary focus was still on learning, we decided to continue
      developing the existing dashboard and integrate the payment provider
      Stripe. The dashboard gives users an overview of their license key and
      subscription, and they can also view change logs after updates. We also
      implemented a rewards system to boost our presence on Twitter. When a user
      successfully buys a product using our script and posts an image of the
      item on Twitter, they earn points. These points can be redeemed for
      various rewards, such as stickers, a free month of service, or a €5
      discount on the monthly fee. To automate different aspects of the process
      and save time, I programmed several Discord bots. One of these bots
      automatically posts images from Discord to Twitter, and you can find the
      code on
      <a
        class="text-primary"
        href="https://github.com/fabioeletto/discord_twitter_image_uploader"
        target="_blank"
        >GitHub</a
      >.
    </p>
    <p class="mb-4">
      By the end of 2020, after a year of development and testing, we were ready
      to launch our script for a monthly fee. In the first few months, we had
      around 200 to 300 active users from across Europe. In March 2021, our
      customer base grew significantly thanks to an effective marketing
      strategy. We offered the script for free testing for a limited time,
      attracting over 2,000 users. After the trial period, we allowed them to
      purchase the full product, resulting in a steady user base of around 1,000
      active monthly users. This success confirmed that all our efforts over the
      past year had paid off. For the rest of the year, we worked tirelessly to
      make further improvements, adding features like an auto-updater and a
      multi-user function that allows synchronization across multiple browser
      windows. Reflecting on the last two years, I've learned a great deal and
      am very grateful for the experience.
    </p>
    <p>
      <span class="italic">To be continued ...</span>
    </p>
  </f-writing-container>
</template>
