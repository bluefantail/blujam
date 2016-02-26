# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'blujm'
set :repo_url, 'git@github.com:bluefantail/blujm.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp
set :tmp_dir, "/tmp/#{`whoami`.split("\\").first.chomp)}"

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/apps/blujm'

set :assets_roles, [:web, :app]

# Default value for :linked_files is []
set :linked_files, fetch(:linked_files, []).push('config/database.yml', 'config/secrets.yml')

# Default value for linked_dirs is []
set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

