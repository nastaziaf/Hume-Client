#!/bin/sh
# ref: https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
#
# Usage example: /bin/sh ./git_push.sh wing328 swagger-petstore-perl "minor update"

# Get user input
git_user_id=$1
git_repo_id=$2
release_note=$3

# Check if git_user_id is empty and provide information
if [ "$git_user_id" = "" ]; then
    git_user_id=""
    echo "[INFO] No command line input provided. Set \$git_user_id to $git_user_id"
fi

# Check if git_repo_id is empty and provide information
if [ "$git_repo_id" = "" ]; then
    git_repo_id=""
    echo "[INFO] No command line input provided. Set \$git_repo_id to $git_repo_id"
fi

# Check if release_note is empty and provide information
if [ "$release_note" = "" ]; then
    release_note=""
    echo "[INFO] No command line input provided. Set \$release_note to $release_note"
fi

# Initialize the local directory as a Git repository
git init

# Adds the files in the local repository and stages them for commit.
git add .

# Commits the tracked changes and prepares them to be pushed to a remote repository. 
git commit -m "$release_note"

# Sets the new remote
git_remote=`git remote`
if [ "$git_remote" = "" ]; then # git remote not defined

    # Check if GIT_TOKEN environment variable is not set
    if [ "$GIT_TOKEN" = "" ]; then
        echo "[INFO] \$GIT_TOKEN (environment variable) is not set. Using the Git credential in your environment."
        git remote add origin https://github.com/${git_user_id}/${git_repo_id}.git
    else
        git remote add origin https://${git_user_id}:${GIT_TOKEN}@github.com/${git_user_id}/${git_repo_id}.git
    fi

fi

git pull origin master

# Pushes (Forces) the changes in the local repository up to the remote repository
echo "Git pushing to https://github.com/${git_user_id}/${git_repo_id}.git"
git push origin master 2>&1 | grep -v 'To https'

