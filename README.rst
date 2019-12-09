:warning:This PolicyStat branch readme. For official Readme please refer to `master branch <https://github.com/PolicyStat/ckeditor-dev/tree/master>`_:warning:

##########################################
CKEditor- The PolicyStat "Enhanced Editor"
##########################################

PolicyStat  uses `CKEditor <http://ckeditor.com/>`_
as the successor/replacement to WYMeditor.

********************************
CKEditor Usage Within Policystat
********************************

.. _ckeditor-pages-using-ckeditor:

Pages Using CKEditor
====================

Currently, CKEditor is enabled as the editor for the following pages:

* Document edit
* Document admin override
* Document clean

On almost all customers except one.


PolicyStat fork
===============

We currently fork CKEditor to allow for a few deviations from core functionality.

To make it easier to keep up with CKEditor core updates, these differences are captured mainly
in the `pstat <https://github.com/PolicyStat/ckeditor-dev/tree/pstat>`_ branch of our fork on GitHub.


Code Installation and configuration
===================================
`CKEditor test guide <https://ckeditor.com/docs/ckeditor4/latest/guide/dev_tests.html>`_ looks out of date,
so we updated a few steps to make them repeatable. You could find them below.


Requirements retrieval
======================

* Follow `the official guide <https://github.com/nvm-sh/nvm/blob/master/README.md#install--update-script>`_ and install latest **nvm**
* Install latest node 10x LTS version with ``nvm install --lts=dubnium``
* Verify you're using it with ``nvm use --lts=dubnium``
* Install package requirements with ``npm install`` in the source root


Prepare tests to run
====================

* Verify your current node version is 10x and all requirements are installed
* Initiate bender environment with ``npx bender init``


Tests run
=========

* Verify your current node version is 10x, all requirements are installed and bender configured
* Start bender server with ``npx bender server run``
* Open http://localhost:1030 in your browser
* Push the button to run tests


Manual tests
============

- Verify your current node version is 10x and all requirements are installed
- ``cd %source root%/samples``
- Start test server with ``npx http-server``
- Open http://127.0.0.1:8080/ in your browser and play with CKEditor


Updating plugins
================

There are a few custom plugins.

They are kept in separate repos and updated manually by coping:

* `autoid <https://github.com/PolicyStat/ckeditor-plugin-autoid-headings>`_
* `detabler <https://github.com/PolicyStat/ckeditor-plugin-detabler>`_
* `highlightbutton <https://github.com/PolicyStat/ckeditor-plugin-highlight-button>`_
* `nanospell <https://github.com/PolicyStat/ckeditor-spell-check-plugin-js-dev-edge>`_
* prebutton
* removenbsp
* `structuredheadings <https://github.com/PolicyStat/ckeditor-plugin-structured-headings>`_



Feature Flags
=============

Since changing the editor is a pretty big deal, there are a number of feature flags:

* ``gh2397_ckeditor_cleaning`` is used to enable CKEditor for Cleaning/Confirming
* ``gh2654_ckeditor_editing`` is used to enable CKEditor for editing
* ``gh2686_new_ckeditor``
  used for toggling whether to serve
  ``site_media/lib/ckeditor`` or
  ``site_media/lib/ckeditor-new``
  when editing is already enabled


Building a CKEditor Release
===========================
First, you need to build a CKEditor release version.
Clone this repo in a separate folder for release building.
For instance, do this ``git clone git@github.com:PolicyStat/ckeditor-dev.git ckeditor-release``

:warning: Strictly do not do ``npm install`` in the release folder.
``npm install`` would install development dependencies and lock them in ``package-lock.json``.
This leads to false alarms from ``github.com``

Enter the release folder and build release with command ``./dev/builder/build.sh``

Unfortunately, CKBuilder does not support outputting source maps.

For development, it may be worth running ``build.sh --leave-js-unminified``
to output an unminified version for local debugging.

To install latest CKEditor version into main ``PolicyStat``, remove
``site_media/lib/ckeditor``
and rename
``site_media/lib/ckeditor-new``
to
``site_media/lib/ckeditor``

The ``pstat`` branch
is copied to
``site_media/lib/ckeditor-new``
by the following process:

* ``./scripts/update_ckeditor.py --source ../ckeditor-dev/dev/builder/release/ckeditor``
  (the output directory of build.sh)

In the case when you want to bypass the version promotion process
and update the feature-flag-off
``ckeditor``,
``--old`` can be passed into
``update_ckeditor.py``


Making Sense of Filters
=======================

CKEditor filters basically work as follows:

Automatic filter +
``extraAllowedContent`` -
``disallowedContent`` =
final set of content

``extraAllowedContent``: used to allow certain legacy styling to work.

``disallowedContent``:
used to blacklist specific properties from certain elements, like tables.

The automatic filter can be fairly complex, as there are many installed plugins.
Thankfully, the final result can be debugged with the Chrome developer console.

For example, to obtain all rules that allow divs, one can do the following:

.. code-block:: javascript

    var allowedContent = CKEDITOR.instances['id_doc-html'].filter.allowedContent
    var divRules = allowedContent.filter(function(rule) { return rule.elements.div } );

The ``featureName`` of each rule can be used to determine which plugin generated the rule.

* `CKEditor 4 advanced filter
  <https://ckeditor.com/docs/ckeditor4/latest/guide/dev_advanced_content_filter.html>`_


Updating Installed Plugins
==========================

There are two separate editor configs, one for general use and one for cleaning.

``site_media/lib/ckeditor-common/editor_config.js``
``site_media/lib/ckeditor-common/cleaner_config.js``

To add a new plugin, edit the ``plugins`` variable in either
or both of these configs as needed.

If you attempt to load a plugin that does not exist, a script error will occur
in all CKEditor selenium tests.


Useful links
============

* `CKEditor 4 docs
  <https://ckeditor.com/docs/ckeditor4/latest/index.html>`_
