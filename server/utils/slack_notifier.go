package utils

import (
	"io/ioutil"
	"net/http"
	"net/url"
)

// SlackNotifier ...
func SlackNotifier(jsonBytes []byte) (string, error) {
	// 一旦postURLはscret.goに
	resp, err := http.PostForm(postURL, url.Values{"payload": {string(jsonBytes)}})
	if err != nil {
		return "", err
	}

	body, _ := ioutil.ReadAll(resp.Body)
	defer resp.Body.Close()
	return string(body), nil
}
