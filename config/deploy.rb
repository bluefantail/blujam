# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'blujm'
set :repo_url, 'git@github.com:bluefantail/blujam.git'

set :passenger_roles, :app

# Default branch is :master
set :branch, `git rev-parse --abbrev-ref HEAD`.chomp
set :tmp_dir, "/tmp/#{`whoami`.split('\\').first.chomp}"

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/apps/blujm'

# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml', 'db/production.sqlite3', 'db/test.sqlite3')

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

set :slack_webhook, 'https://hooks.slack.com/services/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'
set :slack_team, "golden-eagle"
set :slack_channel, '#blujam'

after 'deploy:publishing', 'deploy:restart'
