window.BENCHMARK_DATA = {
  "lastUpdate": 1622840113415,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "b3762c5dc9734844ae057c8c6f5caf276522698b",
          "message": "Merge pull request #195 from TeoZosa/dependabot/pip/black-21.5b2\n\n⬆️ Bump black from 21.5b1 to 21.5b2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b0bd9d1",
          "timestamp": "2021-06-04T20:49:14Z",
          "tree_id": "54bc345224df1c1036d18f219612da5cdb1208e1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b3762c5dc9734844ae057c8c6f5caf276522698b"
        },
        "date": 1622840111817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1220.3246341731208,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662869775163709",
            "extra": "mean: 819.4540796741267 usec\nrounds: 615"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1739.3014175362568,
            "unit": "iter/sec",
            "range": "stddev: 0.000018587572752948154",
            "extra": "mean: 574.9434743843957 usec\nrounds: 1503"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13464.612186004608,
            "unit": "iter/sec",
            "range": "stddev: 0.000004458258632198828",
            "extra": "mean: 74.26875621708736 usec\nrounds: 1850"
          }
        ]
      }
    ]
  }
}