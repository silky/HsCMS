{-# LANGUAGE TupleSections, OverloadedStrings #-}
module Handler.Admin.NewPost where

import Import


getAdminNewPostR :: Handler Html
getAdminNewPostR = do
    adminLayout $ do
        setTitle "Admin: New Post"
        $(widgetFile "admin/new-post")

