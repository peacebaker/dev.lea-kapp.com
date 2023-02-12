<!-- start navbar -->
<nav class="navbar is-black" aria-label="main navigation">

    <!-- When the title bar collapses due to screen size limits, only the navbar-brand div will be displayed,
     so right now it only contains the icon burger icon for expanding/shrinking the menu on mobile. -->
    <div class="navbar-brand">

        <!-- display burger icon-->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false"
              style="margin-left: 0px">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>

    </div>

    <!-- start navbar-menu, the actual menu links -->
    <div class="navbar-menu" id="navMenu">
        <div class="navbar-start">

            <!-- Display Lea's Logo. -->
            <a class="navbar-item" href="/">
                Lea's Library
            </a>

        </div>

        <!-- right-aligned menu links -->
        <div class="navbar-end">

            <!-- stories page -->
            <!-- TODO:  Make this a dropdown menu with links to the most recent stories. -->
            <a class="navbar-item" href="/stories">
                Stories
            </a>

            <!-- news page -->
            <a class="navbar-item" href="/news">
                News
            </a>

            <!-- about page -->
            <a class="navbar-item" href="/about">
                About
            </a>

        </div>
    </div>
</nav>
<!-- end navbar -->

<slot></slot>