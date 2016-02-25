# blujm
A Rails website for Blujm game jam. 

# Installation

Make sure you have a working version of Ruby installed, with the Bundler gem.

Clone blujm and navigate to the folder:

```
git clone https://github.com/bluefantail/blujm.git
cd blujm
```

Install dependencies using bundler:

```
$ bundle install
```

# Database Migrations

Nothing here yet.


# Database Migrations

After everything is installed, and database migrations have been sorted, run:

```
$ rails s
```

blujm should be available at http://localhost:3000


# Editing Content

Content for the various site sections are in the following partials:

About: [_about.html.erb](app/views/page/_about.html.erb)
Enter: [_enter.html.erb](app/views/page/_enter.html.erb)
FAQ: [_faq.html.erb](app/views/page/_faq.html.erb)
Where: [_where.html.erb](app/views/page/_where.html.erb)
Contact: [_contact.html.erb](app/views/page/_contact.html.erb)
