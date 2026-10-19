# WysiQ demonstration site — deployment

The folder `site/` is a standalone, static website with no server dependencies.

## OVH
Deploy the **contents of `site/`** into the existing OVH web root (commonly `www/`), only after confirming the current deployment mechanism, DNS and existing files. No OVH deployment workflow is included or presumed. The ZIP alone does not demonstrate GitHub-to-OVH synchronization.

## Public GitHub community and Releases
Do NOT make the current private `wysiq-org/wysiq` repository public without reviewing its entire content. Create `wysiq-org/wysiq-community` as a separate public repository, enable Issues and Discussions, and publish a WysiQ beta asset through Releases. GitHub Releases counts downloads by asset; it does not identify downloaders. GitHub Discussions identifies participating GitHub accounts.

Update `site/site-config.json` when the community exists and the executable is actually published:
- `public_repo`: public community repo HTTPS URL
- `community_ready`: true only when Discussions and Issues are enabled
- `releases_ready`: true only when the actual beta binary is uploaded

This file is loaded by JS, so verify after deployment by opening the site through HTTP(S), not only using file://. No binary is included. The download button stays disabled until the release exists. The time limit is a fixed expiry on 2026-12-31 implemented in the software, not in this website.

## Content
White paper PDFs, DOCXs, Markdown, and original HTML included; Signals ODT guides in FR/EN/DE; help pages derived from existing repository markdown. All other modules should receive reviewed training documentation before they are marked as available.

## Privacy / analytics
There is no contact form, tracking, cookies, user database, or GitHub OAuth. Download counts are aggregate; no download identity is available. Do not promise user identity collection without explicit opt-in and privacy compliance.
