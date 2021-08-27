window.BENCHMARK_DATA = {
  "lastUpdate": 1630079119193,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "529a6d33207a55a8a3a130f525b71ec450498192",
          "message": "Merge pull request #305 from TeoZosa/dependabot/pip/myst-parser-0.15.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4a6e772",
          "timestamp": "2021-08-27T14:40:18Z",
          "tree_id": "e6bad82ed4f46e82ce9547d5770c6e8f510df574"
        },
        "date": 1630079104713,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.6210411855542,
            "unit": "iter/sec",
            "range": "stddev: 0.0004981276343007785",
            "extra": "mean: 3.654689696622626 msec\nrounds: 89"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 800.5188416142639,
            "unit": "iter/sec",
            "range": "stddev: 0.0003888233542423188",
            "extra": "mean: 1.2491898354115911 msec\nrounds: 802"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1597.2973852005905,
            "unit": "iter/sec",
            "range": "stddev: 0.00019844118576766193",
            "extra": "mean: 626.0574951573084 usec\nrounds: 723"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "6c12dd1f2c51e84d88d69c5b458ba46a6278f761",
          "message": "Merge pull request #188 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-08-27T13:21:46Z",
          "tree_id": "dea9d63ca7c8b0f1c0100c07808331e681b4febd"
        },
        "date": 1630079117153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 335.3579446763226,
            "unit": "iter/sec",
            "range": "stddev: 0.0001743495428726197",
            "extra": "mean: 2.981888504133009 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 938.8474183472077,
            "unit": "iter/sec",
            "range": "stddev: 0.00011018767862742938",
            "extra": "mean: 1.0651358042401056 msec\nrounds: 802"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1906.301717796311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000360207356371762",
            "extra": "mean: 524.5759318498659 usec\nrounds: 719"
          }
        ]
      }
    ]
  }
}