package utils

import (
	"bytes"
	"io/ioutil"
	"net/http"
)

// SlackNotifier ...
func SlackNotifier(jsonBytes []byte) (string, error) {
	// 一旦postURLはscret.goに
	resp, err := http.Post(postURL, "application/json", bytes.NewBuffer(jsonBytes))

	if err != nil {
		return "", err
	}

	body, _ := ioutil.ReadAll(resp.Body)
	defer resp.Body.Close()
	return string(body), nil
}
